# SHP.EXchange
Briefly: exchange emulator

Expanded: 
- Stocks
- Purchase / Sale
- Long trading
- Short trading
- Leverage trading
- Margin call
- The history is loaded as an array of quotes. Later it is emulated by bots.

## Technology stack
- Python 3.8 (at least)
- Django 3
- Django REST Framework


## Preparing the developer's workplace.

### Installing the required libraries
```bash
sudo apt install make gcc g++
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
````

### Backend
1. In the main project folder, you need to create a `data` folder and put the .csv files from [required files](https://gitlab.informatics.ru/2020-2021/mytischi/s105/exchange_engine/-/wikis/%D0%9D%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D1%8B) в Wiki проекта. 
   Они нужны будут для запуска ботов
2. Create venv, install libraries
   ```bash
   python3.8 -m venv venv
   source venv/bin/activate
   pip install --upgrade pip
   pip install -r requirements.txt
   ```

3. Prepare DB
   * Install postgresql
     ```bash
     sudo apt install postgresql
     sudo systemctl start postgresql.service
     sudo systemctl enable postgresql.service
     ```
   * Create user and database
     ```bash
     sudo -u postgres psql
     ```
     Next in the console postgresql
     ```sql
     create database exchange;
     create user shp with encrypted password 'promprog';
     grant all privileges on database exchange to shp;
     \q
     ```
   * Download from [required files](https://gitlab.informatics.ru/2020-2021/mytischi/s105/exchange_engine/-/wikis/%D0%9D%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D1%8B) 
     file `exchange.sql`, place it in the root of the project and load it into the database with the command
     ```bash
     sudo -u postgres psql exchange < exchange.sql
     ```
   * Update schema
     ```bash
     ./manage.py migrate
     ```
   * create a user (performed only for development, not in production)
     ```bash
     ./manage.py shell -c "from django.contrib.auth import get_user_model; get_user_model().objects.create_superuser('vasya', '1@abc.net', 'promprog')"
     ```

### Frontend
```bash
cd exchange_engine_frontend
npm install
```

### Launch of the project
```bash
python price_bot.py    # open in a separate tab, the command will work throughout the entire time
python candles_bot.py    # open in a separate tab, the command will work throughout the entire time
./manage.py runserver  # open in a separate tab, the command will work throughout the entire time
cd exchange_engine_frontend
npm run serve  # open in a separate tab, the command will work throughout the entire time
```

## Tests
To test the purity of the code, enter the command in the terminal:
```bash
DJANGO_SETTINGS_MODULE=exchange_engine.settings pylint --load-plugins pylint_django --load-plugins pylint_django.checkers.migrations *
```

To test the code itself, enter into the terminal:
```bash
./manage.py test
```


## Additionally

You can find all the necessary files here: https://gitlab.informatics.ru/2020-2021/mytischi/s105/exchange_engine/-/wikis/%D0%9D%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D0%B5+%D1%84%D0%B0%D0%B9%D0%BB%D1%8B

More information about the project and its launch is available at the link: https://gitlab.informatics.ru/2020-2021/mytischi/s105/exchange_engine/-/wikis/home
