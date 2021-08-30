from django.db import models


class Link(models.Model):
    url = models.CharField(max_length=256, verbose_name="URL", null=False, blank=False)
    title = models.CharField(max_length=256, verbose_name="タイトル", null=False, blank=False)
    created_at = models.DateField(auto_now=True)

    def __str__(self):
        return "{}: {}".format(self.title, self.url)

    def to_json(self):
        return {
            "id": self.pk,
            "url": self.url,
            "title": self.title
        }
