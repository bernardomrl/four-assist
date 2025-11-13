import { TooltipProvider } from '@/components/ui';

export function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
	return (
		<div className="font-sans antialiased">
			<TooltipProvider>{children}</TooltipProvider>
		</div>
	);
}
