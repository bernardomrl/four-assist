import { MessageSquarePlusIcon, SettingsIcon } from 'lucide-react';

import { Button, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui';

export function Header() {
	return (
		<header className="fixed top-0 flex w-full items-center justify-between border-b p-4">
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon" className="">
						<MessageSquarePlusIcon className="size-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Novo chat</p>
				</TooltipContent>
			</Tooltip>
			<h1 className="text-lg font-semibold">4Assist</h1>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon" className="">
						<SettingsIcon className="size-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Ajustes</p>
				</TooltipContent>
			</Tooltip>
		</header>
	);
}
