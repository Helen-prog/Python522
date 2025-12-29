from django.db import models
from users.models import User


class Order(models.Model):
    CREATE = 0
    PAIR = 1
    ON_WAY = 2
    DELIVERED = 3
    STATUSES = (
        (CREATE, 'Создан'),
        (PAIR, 'Оплачен'),
        (ON_WAY, 'В пути'),
        (DELIVERED, 'Доставлен')
    )

    first_name = models.CharField(max_length=100, verbose_name='Имя')
    last_name = models.CharField(max_length=100, verbose_name='Фамилия')
    email = models.EmailField(max_length=200, verbose_name="Email")
    address = models.CharField(max_length=250, verbose_name="Адрес")
    basket_history = models.JSONField(default=dict, verbose_name="История заказов")
    created = models.DateTimeField(auto_now_add=True)
    status = models.SmallIntegerField(choices=STATUSES, default=CREATE)
    initiator = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Заказчик")

    def __str__(self):
        return f"Заказ #{self.id}. {self.first_name} {self.last_name}"

    class Meta:
        verbose_name = "заказ"
        verbose_name_plural = "заказы"
