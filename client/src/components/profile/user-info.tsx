import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { user } from "@/data/user";

export const UserInfo = () => {
  return (
    <div className="w-full md:w-1/3">
      <Card>
        <CardHeader className="flex flex-col items-center">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src="https://i.pinimg.com/736x/de/b9/2f/deb92ffd7466cf5830cafb47afeb9b2f.jpg"
              alt="Foto de perfil"
            />
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
  );
};
