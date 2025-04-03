import { Button } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  const user = {
    firstName: "Vicente",
    lastName: "Rivera",
    email: "vrivera2023@alu.uct.cl",
    since: "Marzo 2023",
    purchases: 12,
    // reviews: 5,
    phone: "+56 2 3456 7890",
    address: "Av. Libertador Bernardo O'Higgins, 123",
  };

  return (
    <div className="container px-4 py-8 mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar con información del usuario */}
        <div className="w-full md:w-1/3">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="Foto de perfil" />
                <AvatarFallback>VR</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">
                {user.firstName} {user.lastName}
              </CardTitle>
              <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Miembro desde:</span>
                  <span>{user.since}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Compras:</span>
                  <span>{user.purchases}</span>
                </div>
                {/* <div className="flex justify-between">
                  <span className="text-muted-foreground">Reseñas:</span>
                  <span>{user.reviews}</span>
                </div> */}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Cerrar Sesión
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Contenido principal */}
        <div className="flex-1">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Datos Personales</TabsTrigger>
              <TabsTrigger value="security">Seguridad</TabsTrigger>
              <TabsTrigger value="preferences">Preferencias</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Datos Personales</CardTitle>
                  <CardDescription>
                    Actualiza tu información personal
                  </CardDescription>
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
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
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
            </TabsContent>

            <TabsContent value="security" className="mt-6">
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
                    <Label htmlFor="confirmPassword">
                      Confirmar contraseña
                    </Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Actualizar Contraseña</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="mt-6">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
