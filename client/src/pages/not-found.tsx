import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 — Страница не найдена</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Возможно, страница была перемещена или никогда не существовала.
          </p>

          <div className="mt-6">
            <Button asChild>
              <Link href="/">Вернуться на главную</Link>
            </Button>
          </div>
        </CardContent>

      </Card>
    </div>
  );
}
