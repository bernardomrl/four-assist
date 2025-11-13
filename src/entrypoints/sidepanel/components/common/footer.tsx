import { CheckIcon, SendIcon, SlidersHorizontalIcon, UploadIcon } from 'lucide-react';
import { useState } from 'react';

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	Switch,
	Textarea
} from '@/components/ui';

const AGENTS = [
	{ id: 'catalog', label: 'Gestão de Catálogo', value: 'catalog_management' },
	{ id: 'knowledge', label: 'Gestão de Conhecimento', value: 'knowledge_management' },
	{ id: 'contract', label: 'Registro de Contratos', value: 'contract_register' }
];

export function Footer() {
	const [selectedAgent, setSelectedAgent] = useState('catalog_management');
	const [mode, setMode] = useState(false); // false = ask, true = act
	const [selectedFile, setSelectedFile] = useState<string | null>(null);

	const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setSelectedFile(file.name);
			console.log('Arquivo selecionado:', file.name);
		}
	};

	return (
		<footer className="max-h-sm fixed bottom-0 flex w-full items-center justify-between gap-2 border-t p-4">
			<Textarea
				className="placeholder:text-muted-foreground/75 h-20 resize-none text-sm"
				placeholder="Pergunte qualquer coisa sobre o ServiceNow"
			/>
			<div className="flex h-20 flex-col items-center justify-between gap-2">
				<Button size="icon">
					<SendIcon className="size-4" />
				</Button>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button size="icon" variant="outline">
							<SlidersHorizontalIcon className="size-4" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent className="w-64">
						<DropdownMenuLabel>Agentes</DropdownMenuLabel>
						{AGENTS.map((agent) => (
							<DropdownMenuItem
								key={agent.id}
								onClick={() => setSelectedAgent(agent.value)}
								className="flex cursor-pointer items-center justify-between"
							>
								<span>{agent.label}</span>
								{selectedAgent === agent.value && <CheckIcon className="h-4 w-4" />}
							</DropdownMenuItem>
						))}

						<DropdownMenuSeparator />

						<div className="px-2 py-2">
							<div className="flex items-center justify-between">
								<span className="text-sm font-semibold">Modo</span>
								<div className="flex items-center gap-2">
									<span className="text-muted-foreground text-xs">
										{mode ? 'Agir' : 'Perguntar'}
									</span>
									<Switch checked={mode} onCheckedChange={setMode} />
								</div>
							</div>
						</div>

						<div className="px-2 py-2">
							<input
								id="file-upload"
								type="file"
								className="hidden"
								onChange={handleFileUpload}
							/>
							<Button
								size="sm"
								className="w-full gap-2 text-xs"
								onClick={() => document.getElementById('file-upload')?.click()}
							>
								<UploadIcon className="h-4 w-4" />
								{selectedFile ? selectedFile : 'Selecionar Arquivo'}
							</Button>
						</div>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</footer>
	);
}
