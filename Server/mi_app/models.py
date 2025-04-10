from django.db import models

class TipoUsuario(models.Model):
    nombre = models.CharField(max_length=20)

    def __str__(self):
        return self.nombre

class Usuario(models.Model):
    nombre = models.CharField(max_length=255)
    correo = models.EmailField(max_length=100)
    apellido = models.CharField(max_length=255)
    empresa = models.CharField(max_length=255)
    tipo_usuario = models.ForeignKey(TipoUsuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

class Categoria(models.Model):
    nombre_categoria = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre_categoria

class Producto(models.Model):
    nombre = models.CharField(max_length=255)
    descripcion = models.CharField(max_length=255)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    image = models.CharField(max_length=255)  
    slug = models.SlugField(unique=True)  

    def __str__(self):
        return self.nombre

class Precio(models.Model):
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)

class Stock(models.Model):
    cantidad = models.IntegerField()
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)

class Venta(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    total_sin_IVA = models.DecimalField(max_digits=10, decimal_places=2)
    total_con_IVA = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_venta = models.DateField()

class DetalleVenta(models.Model):
    venta = models.ForeignKey(Venta, on_delete=models.CASCADE)
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.IntegerField()

    class Meta:
        unique_together = ('venta', 'producto')


