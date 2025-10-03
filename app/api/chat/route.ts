import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID!;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Mensagem não fornecida' },
        { status: 400 }
      );
    }

    // Criar uma nova thread
    const thread = await openai.beta.threads.create();

    // Adicionar mensagem do usuário
    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: message,
    });

    // Executar o assistente
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: ASSISTANT_ID,
    });

    // Aguardar conclusão
    let runStatus = await openai.beta.threads.runs.retrieve(
      thread.id,
      run.id
    );

    // Poll até completar (máximo 30 segundos)
    let attempts = 0;
    while (runStatus.status !== 'completed' && attempts < 30) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      attempts++;
    }

    if (runStatus.status !== 'completed') {
      return NextResponse.json(
        { error: 'Tempo limite excedido' },
        { status: 408 }
      );
    }

    // Obter resposta do assistente
    const messages = await openai.beta.threads.messages.list(thread.id);
    const assistantMessage = messages.data.find(
      (msg) => msg.role === 'assistant'
    );

    if (!assistantMessage || assistantMessage.content[0].type !== 'text') {
      return NextResponse.json(
        { error: 'Resposta inválida do assistente' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      response: assistantMessage.content[0].text.value,
      threadId: thread.id,
    });
  } catch (error) {
    console.error('Erro na API do chat:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}