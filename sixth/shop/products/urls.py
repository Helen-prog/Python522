from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('products/', views.products, name='products'),
    path('products/<int:category_id>/', views.products, name='category'),
    path('product/<int:pk>/', views.product, name='product'),
    path('products/basket-add/<int:product_id>/', views.basket_add, name='basket_add'),
    path('products/basket_minus/<int:product_id>/', views.basket_minus, name='basket_minus'),
    path('products/basket_delete/<int:product_id>/', views.basket_delete, name='basket_delete'),
]
