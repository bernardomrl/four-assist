import { MessageCircleMoreIcon } from 'lucide-react';

import { Footer, Header } from '@/entrypoints/sidepanel/components/common';

export function Page() {
	return (
		<>
			<Header />
			<div className="flex h-dvh w-full flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center gap-2">
					<MessageCircleMoreIcon className="text-primary size-10" />
					<h1 className="text-xl font-semibold">Novo chat</h1>
					<h3 className="text-muted-foreground text-md max-w-60 text-center">
						Envie uma mensagem para começar a conversa.
					</h3>
				</div>
			</div>
			<Footer />
		</>
	);
}
