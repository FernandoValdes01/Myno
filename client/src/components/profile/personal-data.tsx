import { user } from "@/data/user";
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

export const PersonalData = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Datos Personales</CardTitle>
        <CardDescription>Actualiza tu información personal</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nombre</Label>
            <Input id="firstName" defaultValue={user.firstName} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Apellido</Label>
            <Input id="lastName" defaultValue={user.lastName} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" defaultValue={user.email} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Compañia</Label>
            <Input id="company" type="company" defaultValue={user.company} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" type="tel" defaultValue={user.phone} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Dirección</Label>
          <Input id="address" defaultValue={user.address} />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Guardar Cambios</Button>
      </CardFooter>
    </Card>
  );
};
