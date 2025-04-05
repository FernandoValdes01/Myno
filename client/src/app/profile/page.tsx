import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserInfo } from "@/components/profile/user-info";
import { PersonalData } from "@/components/profile/personal-data";
import { SecurityOptions } from "@/components/profile/security-options";
import { Preferences } from "@/components/profile/preferences";

export default function ProfilePage() {
  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Datos Personales</TabsTrigger>
              <TabsTrigger value="security">Seguridad</TabsTrigger>
              <TabsTrigger value="preferences">Preferencias</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-6">
              <PersonalData />
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <SecurityOptions />
            </TabsContent>

            <TabsContent value="preferences" className="mt-6">
              <Preferences />
            </TabsContent>
          </Tabs>
        </div>
        <UserInfo />
      </div>
    </div>
  );
}
