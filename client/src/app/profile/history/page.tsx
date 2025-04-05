import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { purchaseHistory } from "@/data/history";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Historial de Compras</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los pedidos</SelectItem>
              <SelectItem value="last30">Últimos 30 días</SelectItem>
              <SelectItem value="last90">Últimos 90 días</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="processing">En proceso</TabsTrigger>
          <TabsTrigger value="delivered">Entregados</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelados</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Todos los pedidos</CardTitle>
              <CardDescription>
                Historial completo de tus compras
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {purchaseHistory.map((purchase) => (
                  <AccordionItem key={purchase.id} value={purchase.id}>
                    <AccordionTrigger>
                      <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
                        <div className="flex flex-col">
                          <span className="font-medium">
                            Pedido #{purchase.id}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {purchase.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-medium">
                            ${purchase.total.toFixed(2)}
                          </span>
                          <Badge variant="outline">{purchase.status}</Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Producto</TableHead>
                              <TableHead className="text-right">
                                Cantidad
                              </TableHead>
                              <TableHead className="text-right">
                                Precio
                              </TableHead>
                              <TableHead className="text-right">
                                Total
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {purchase.items.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell className="text-right">
                                  {item.quantity}
                                </TableCell>
                                <TableCell className="text-right">
                                  ${item.price.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-right">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </TableCell>
                              </TableRow>
                            ))}
                            <TableRow>
                              <TableCell
                                colSpan={3}
                                className="text-right font-medium"
                              >
                                Total
                              </TableCell>
                              <TableCell className="text-right font-medium">
                                ${purchase.total.toFixed(2)}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>

                        <div className="flex flex-col sm:flex-row gap-4 justify-between">
                          <div>
                            <h4 className="font-medium mb-1">
                              Información de envío
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Calle Ejemplo, 123
                            </p>
                            <p className="text-sm text-muted-foreground">
                              28001 Madrid, España
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">Método de pago</h4>
                            <p className="text-sm text-muted-foreground">
                              Tarjeta terminada en 4242
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Ver factura
                          </Button>
                          <Button size="sm">Repetir compra</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos en proceso</CardTitle>
              <CardDescription>
                Pedidos que están siendo procesados o enviados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground">
                  No tienes pedidos en proceso actualmente
                </p>
                <Button variant="outline" className="mt-4">
                  <Link href="/">Ir a la tienda</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delivered" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos entregados</CardTitle>
              <CardDescription>
                Pedidos que ya han sido entregados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {purchaseHistory.map((purchase) => (
                  <AccordionItem key={purchase.id} value={purchase.id}>
                    <AccordionTrigger>
                      <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
                        <div className="flex flex-col">
                          <span className="font-medium">
                            Pedido #{purchase.id}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {purchase.date}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-medium">
                            ${purchase.total.toFixed(2)}
                          </span>
                          <Badge variant="outline">{purchase.status}</Badge>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Producto</TableHead>
                              <TableHead className="text-right">
                                Cantidad
                              </TableHead>
                              <TableHead className="text-right">
                                Precio
                              </TableHead>
                              <TableHead className="text-right">
                                Total
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {purchase.items.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell className="text-right">
                                  {item.quantity}
                                </TableCell>
                                <TableCell className="text-right">
                                  ${item.price.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-right">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>

                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            Ver detalles
                          </Button>
                          <Button size="sm">Repetir compra</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cancelled" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pedidos cancelados</CardTitle>
              <CardDescription>Pedidos que han sido cancelados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground">
                  No tienes pedidos cancelados
                </p>
                <Button variant="outline" className="mt-4">
                  Ir a la tienda
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
