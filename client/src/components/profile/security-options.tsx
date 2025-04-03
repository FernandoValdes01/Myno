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

export const SecurityOptions = () => {
  // ! Las cuentas de google no tienen contraseña
  return (
    <Card>
      <CardHeader>
        <CardTitle>Seguridad</CardTitle>
        <CardDescription>
          Gestiona tu contraseña y seguridad de la cuenta
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="currentPassword">Contraseña actual</Label>
          <Input id="currentPassword" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="newPassword">Nueva contraseña</Label>
          <Input id="newPassword" type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
          <Input id="confirmPassword" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Actualizar Contraseña</Button>
      </CardFooter>
    </Card>
  );
};
