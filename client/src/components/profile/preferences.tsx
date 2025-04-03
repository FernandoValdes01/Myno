import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Preferences = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferencias</CardTitle>
        <CardDescription>Personaliza tu experiencia</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Notificaciones por email</p>
              <p className="text-sm text-muted-foreground">
                Recibe actualizaciones sobre tus compras
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="notifications" className="sr-only">
                Notificaciones
              </Label>
              <Input
                id="notifications"
                type="checkbox"
                className="w-4 h-4"
                defaultChecked
              />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Boletín de ofertas</p>
              <p className="text-sm text-muted-foreground">
                Recibe ofertas y promociones
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="newsletter" className="sr-only">
                Boletín
              </Label>
              <Input
                id="newsletter"
                type="checkbox"
                className="w-4 h-4"
                defaultChecked
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Guardar Preferencias</Button>
      </CardFooter>
    </Card>
  );
};
