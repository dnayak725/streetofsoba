import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dinning-location',
    loadChildren: () => import('./dinning-location/dinning-location.module').then( m => m.DinningLocationPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'order-list',
    loadChildren: () => import('./order-list/order-list.module').then( m => m.OrderListPageModule)
  },
  {
    path: 'add-snacks',
    loadChildren: () => import('./add-snacks/add-snacks.module').then( m => m.AddSnacksPageModule)
  },
  {
    path: 'payment-type',
    loadChildren: () => import('./payment-type/payment-type.module').then( m => m.PaymentTypePageModule)
  },
  {
    path: 'order-success',
    loadChildren: () => import('./order-success/order-success.module').then( m => m.OrderSuccessPageModule)
  },
  {
    path: 'follow-instructions',
    loadChildren: () => import('./follow-instructions/follow-instructions.module').then( m => m.FollowInstructionsPageModule)
  },
  {
    path: 'base-modal',
    loadChildren: () => import('./base-modal/base-modal.module').then( m => m.BaseModalPageModule)
  },
  {
    path: 'single-item',
    loadChildren: () => import('./single-item/single-item.module').then( m => m.SingleItemPageModule)
  },
  {
    path: 'print-out',
    loadChildren: () => import('./print-out/print-out.module').then( m => m.PrintOutPageModule)
  },
  {
    path: 'single-product',
    loadChildren: () => import('./single-product/single-product.module').then( m => m.SingleProductPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'update-modal',
    loadChildren: () => import('./update-modal/update-modal.module').then( m => m.UpdateModalPageModule)
  },
  {
    path: 'coupon',
    loadChildren: () => import('./coupon/coupon.module').then( m => m.CouponPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
