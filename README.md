# ROS-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Ruben Seco

## Ejemplo

```
import {ProducCard, ProductImage, ProductTitle, ProductButtons} from ros-product-card;
```

```
 <ProductCard
   product={product}
   initialValues={{
     count: 4,
     maxCount: 10
   }}>
   {({ reset, increaseBy, maxCount, isMaxCountReached, count }) => (
     <>
       <ProductImage />
       <ProductTitle />
       <ProductButtons />
     </>
   )}
 </ProductCard>

 ```
