Wagtail FontAwesome
====================
Add `FontAwesome <https://github.com/FortAwesome/Font-Awesome>`_ icons to StreamField.

.. image:: https://github.com/alexgleason/wagtailfontawesome/raw/master/screenshot.png
  :alt: Screenshot

Install
-------

.. code-block:: shell

    pip install wagtailfontawesome



Then add `wagtailfontawesome` to your installed apps.

Usage
-----
StreamField
~~~~~~~~~~~
Add FontAwesome icons to StreamField `the regular way <http://docs.wagtail.io/en/latest/topics/streamfield.html#basic-block-types>`_, just set `icon="fa-something"`. Reference `the full list <http://fontawesome.io/icons/>`_.

wagtailmodeladmin
~~~~~~~~~~~~~~~~~
`wagtailmodeladmin <https://github.com/rkhleics/wagtailmodeladmin>`_ is supported if you're using Wagtail 1.4 or above. Similar to StreamField, just set `icon="fa-something"` on your menu item.

Hallo plugins
~~~~~~~~~~~~~
You can use FontAwesome icons on custom Hallo buttons by setting the `icon` option to `icon icon-fa-something`.

.. code-block:: javascript

    button.hallobutton({
      label: "Blockquote",
      icon: 'icon icon-fa-quote-left',
    });



Other parts of the admin
~~~~~~~~~~~~~~~~~~~~~~~~
You can include icons anywhere in the admin with:

.. code-block:: html

    <i class="icon icon-fa-something"></i>



In Wagtail 1.3.x and below you can only use icons on the page editor screen.

On the front-end
~~~~~~~~~~~~~~~~
You can also import this on the front-end, if you want.

.. code-block:: html

    {% load staticfiles %}

    <link rel="stylesheet" href="{% static 'wagtailfontawesome/css/wagtailfontawesome.css' %}">



Then include icons anywhere on the front-end with:

.. code-block:: html

    <i class="icon icon-fa-something"></i>



Using wagtailfontawesome as an optional dependency
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you want to distribute a Wagtail plugin with FontAwesome icons, you can use this package as an optional dependency by checking if it's installed in Django, and falling back otherwise.

.. code-block:: python

    from django.conf import settings
    from wagtail.wagtailcore.blocks import StructBlock


    class BlockquoteBlock(StructBlock):
        quote = TextBlock()
        author = TextBlock()

        class Meta:
            if 'wagtailfontawesome' in settings.INSTALLED_APPS:
                icon = 'fa-quote-left'



(in this case, the fallback is to do nothing)


