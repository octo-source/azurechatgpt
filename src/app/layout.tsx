import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/features/providers";
import { AI_NAME } from "@/features/theme/customise";
import { cn } from "@/lib/utils";
import localFont from 'next/font/local'
import "./globals.css";

// Preferred font for the app for controls and text.
// This should match the font configured for the body in globals.css.
// The header elements can be configured separately.
const hearst = localFont({
  src: [
    {
      path: '../public/fonts/NHaasGroteskTXPro-55Rg.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NHaasGroteskTXPro-56It.otf',
      weight: '400',
      style: 'italic',
    }
  ],
})

export const metadata = {
  title: AI_NAME,
  description: AI_NAME,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body
        className={cn(hearst.className, "flex w-full h-full bg-page-background")}
      >
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div
              className={cn(
                hearst.className,
                "flex w-full p-2 h-full gap-2 bg-page-background"
              )}
            >
              {children}
            </div>

            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
