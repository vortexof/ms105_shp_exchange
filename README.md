# Exchange Engine
Кратко: эмулятор биржи

Развёрнуто: 
- Акции
- Покупка / Продажа
- Торговля в лонг
- Торговля в шорт
- Торговля с плечом
- Margin call
- История - загружается в виде массива котировок. Позже - эмулируется ботами.

## Технологический стек:
- Python 3
- Django 3
- Django REST Framework

## Quickstart
В главной папке проекта необходимо создать папку `data` и поместить туда .csv файлы из Wiki проекта.
```bash
sudo apt install make
pip install --upgrade pip
pip install -r requirements.txt
sudo apt-get install postgresql
sudo systemctl start postgresql.service
sudo systemctl enable postgresql.service
sudo -u postgres psql
create database exchange;
create user shp with encrypted password 'promprog';
grant all privileges on database exchange to shp;
\q
sudo -u postgres psql exchange < exchange.sql
./manage.py migrate
./manage.py shell -c "from django.contrib.auth import get_user_model; get_user_model().objects.create_superuser('vasya', '1@abc.net', 'promprog')"
python price_bot.py    # открыть в отдельной вкладке, команда будет работать на протяжении всего времени
./manage.py runserver  # открыть в отдельной вкладке, команда будет работать на протяжении всего времени
sudo rm /etc/apt/sources.list.d/google-chrome.list
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install gcc g++ make
sudo apt-get install -y nodejs
cd exchange_engine_frontend
npm install
npm run serve  # открыть в отдельной вкладке, команда будет работать на протяжении всего времени
```

Для тестирования чистоты кода введите команду:
```bash
DJANGO_SETTINGS_MODULE=exchange_engine.settings pylint --load-plugins pylint_django --load-plugins pylint_django.checkers.migrations *
```

Все необходимые файлы вы можете найти здесь: https://gitlab.informatics.ru/2020-2021/mytischi/s105/exchange_engine/-/wikis/%D0%9D%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D0%B5+%D1%84%D0%B0%D0%B9%D0%BB%D1%8B

Более подробная информация и проекте и его запуске доступна по ссылке: https://gitlab.informatics.ru/2020-2021/mytischi/s105/exchange_engine/-/wikis/home
