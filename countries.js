const countries = {
    'Austria': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Lukas", "Maximilian", "Elias", "David", "Jakob", "Paul", "Leon", "Felix", "Luca", "Moritz",
                        "Jonas", "Fabian", "Simon", "Julian", "Niklas", "Alexander", "Jonathan", "Tobias", "Benjamin", "Dominik",
                        "Philipp", "Christian", "Sebastian", "Adrian", "Markus", "Anton", "Nico", "Michael", "Valentin", "Florian",
                        "Daniel", "Fabio", "Vincent", "Emil", "Gabriel", "Nikolai", "Emanuel", "Raphael", "Oliver", "Hannes",
                        "Klaus", "Wolfgang", "Andreas", "Johann", "Richard", "Gerald", "Heinz", "Werner", "Alfred", "Armin",
                        "Benedikt", "Bernd", "Christoph", "David", "Edwin", "Franz", "Gerhard", "Gunter", "Helmut", "Ingo", "Jan",
                        "Karl", "Kurt", "Leopold", "Matthias", "Norbert", "Oskar", "Pascal", "Quirin", "Roland", "Stefan", "Theo",
                        "Uwe", "Viktor", "Wilhelm", "Xaver", "Yannick", "Zacharias"
                      ],
                    'second': [
                        "Schmidt", "Mueller", "Wagner", "Schneider", "Fischer", "Weber", "Meyer", "Huber", "Hofer", "Gruber",
                        "Leitner", "Steiner", "Schmid", "Maier", "Eder", "Bauer", "Winkler", "Auer", "Pichler", "Berger",
                        "Fuchs", "Wallner", "Mayr", "Lang", "Schwarz", "Fischer", "Wimmer", "Hofmann", "Lechner", "Moser",
                        "Eder", "Neumann", "Haas", "Hofmann", "Winkler", "Koller", "Wolf", "Leitner", "Wagner", "Gruen",
                        "Herrmann", "Binder", "Aigner", "Schuster", "Richter", "Herzog", "Schwarz", "Fiala", "Scholz",
                        "Froehlich", "Hermann", "Haas", "Hess", "Lederer", "Lang", "Zimmermann", "Schubert", "Brunner",
                        "Resch", "Reiter", "Fritz", "Gruber", "Brunner", "Schmidt", "Brandtner", "Moser", "Leitner",
                        "Gross", "Egger", "Wieser", "Reiter", "Bach", "Kramer", "Pfeiffer", "Stadler", "Weiss", "Sailer",
                        "Bauer", "Schreiber", "Lechner", "Scholz", "Froehlich", "Wimmer", "Eder", "Reiter", "Koch", "Roth",
                        "Leitner", "Sauer"
                      ]
                },
                'female': {
                    'first': [
                        "Sophie", "Lena", "Anna", "Emma", "Laura", "Lea", "Lara", "Hannah", "Julia", "Sarah",
                        "Isabella", "Ella", "Mia", "Emilia", "Alina", "Melanie", "Vanessa", "Marie", "Lina", "Clara",
                        "Katharina", "Nina", "Victoria", "Amelie", "Lisa", "Jana", "Eva", "Paula", "Magdalena", "Celine",
                        "Zoe", "Olivia", "Maria", "Sophia", "Jasmin", "Rosa", "Ava", "Carina", "Elisa", "Mila",
                        "Eleonora", "Selina", "Miriam", "Antonia", "Leonie", "Valerie", "Anastasia", "Greta", "Charlotte",
                        "Fiona", "Livia", "Nora", "Sara", "Elena", "Vivian", "Amy", "Evelyn", "Gloria", "Irina",
                        "Melina", "Ina", "Elvira", "Helena", "Raphaela", "Sabrina", "Alicia", "Emely", "Eliana", "Linda",
                        "Marlene", "Stella", "Theresa", "Beatrice", "Helene", "Ines", "Veronika", "Frida", "Maja", "Aurora",
                        "Lisbeth", "Lorena", "Amelia", "Diana", "Isa", "Rosalie", "Ruth", "Yara", "Alma", "Mira"
                      ],
                    'second': [
                        "Schmidt", "Mueller", "Wagner", "Schneider", "Fischer", "Weber", "Meyer", "Huber", "Hofer", "Gruber",
                        "Leitner", "Steiner", "Schmid", "Maier", "Eder", "Bauer", "Winkler", "Auer", "Pichler", "Berger",
                        "Fuchs", "Wallner", "Mayr", "Lang", "Schwarz", "Fischer", "Wimmer", "Hofmann", "Lechner", "Moser",
                        "Eder", "Neumann", "Haas", "Hofmann", "Winkler", "Koller", "Wolf", "Leitner", "Wagner", "Gruen",
                        "Herrmann", "Binder", "Aigner", "Schuster", "Richter", "Herzog", "Schwarz", "Fiala", "Scholz",
                        "Froehlich", "Hermann", "Haas", "Hess", "Lederer", "Lang", "Zimmermann", "Schubert", "Brunner",
                        "Resch", "Reiter", "Fritz", "Gruber", "Brunner", "Schmidt", "Brandtner", "Moser", "Leitner",
                        "Gross", "Egger", "Wieser", "Reiter", "Bach", "Kramer", "Pfeiffer", "Stadler", "Weiss", "Sailer",
                        "Bauer", "Schreiber", "Lechner", "Scholz", "Froehlich", "Wimmer", "Eder", "Reiter", "Koch", "Roth",
                        "Leitner", "Sauer"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Lukas", "Maximilian", "Elias", "David", "Jakob", "Paul", "Leon", "Felix", "Luca", "Moritz",
                        "Jonas", "Fabian", "Simon", "Julian", "Niklas", "Alexander", "Jonathan", "Tobias", "Benjamin", "Dominik",
                        "Philipp", "Christian", "Sebastian", "Adrian", "Markus", "Anton", "Nico", "Michael", "Valentin", "Florian",
                        "Daniel", "Fabio", "Vincent", "Emil", "Gabriel", "Nikolai", "Emanuel", "Raphael", "Oliver", "Hannes",
                        "Klaus", "Wolfgang", "Andreas", "Johann", "Richard", "Gerald", "Heinz", "Werner", "Alfred", "Armin",
                        "Benedikt", "Bernd", "Christoph", "David", "Edwin", "Franz", "Gerhard", "Gunter", "Helmut", "Ingo", "Jan",
                        "Karl", "Kurt", "Leopold", "Matthias", "Norbert", "Oskar", "Pascal", "Quirin", "Roland", "Stefan", "Theo",
                        "Uwe", "Viktor", "Wilhelm", "Xaver", "Yannick", "Zacharias"
                      ],
                    'second': [
                        "Schmidt", "Müller", "Wagner", "Schneider", "Fischer", "Weber", "Meyer", "Huber", "Hofer", "Gruber",
                        "Leitner", "Steiner", "Schmid", "Maier", "Eder", "Bauer", "Winkler", "Auer", "Pichler", "Berger",
                        "Fuchs", "Wallner", "Mayr", "Lang", "Schwarz", "Fischer", "Wimmer", "Hofmann", "Lechner", "Moser",
                        "Eder", "Neumann", "Haas", "Hofmann", "Winkler", "Koller", "Wolf", "Leitner", "Wagner", "Grün",
                        "Herrmann", "Binder", "Aigner", "Schuster", "Richter", "Herzog", "Schwarz", "Fiala", "Scholz",
                        "Fröhlich", "Hermann", "Haas", "Hess", "Lederer", "Lang", "Zimmermann", "Schubert", "Brunner",
                        "Resch", "Reiter", "Fritz", "Gruber", "Brunner", "Schmidt", "Brandtner", "Moser", "Leitner",
                        "Gross", "Egger", "Wieser", "Reiter", "Bach", "Kramer", "Pfeiffer", "Stadler", "Weiss", "Sailer",
                        "Bauer", "Schreiber", "Lechner", "Scholz", "Fröhlich", "Wimmer", "Eder", "Reiter", "Koch", "Roth",
                        "Leitner", "Sauer"
                      ]
                },
                'female': {
                    'first': [
                        "Sophie", "Lena", "Anna", "Emma", "Laura", "Lea", "Lara", "Hannah", "Julia", "Sarah",
                        "Isabella", "Ella", "Mia", "Emilia", "Alina", "Melanie", "Vanessa", "Marie", "Lina", "Clara",
                        "Katharina", "Nina", "Victoria", "Amelie", "Lisa", "Jana", "Eva", "Paula", "Magdalena", "Celine",
                        "Zoe", "Olivia", "Maria", "Sophia", "Jasmin", "Rosa", "Ava", "Carina", "Elisa", "Mila",
                        "Eleonora", "Selina", "Miriam", "Antonia", "Leonie", "Valerie", "Anastasia", "Greta", "Charlotte",
                        "Fiona", "Livia", "Nora", "Sara", "Elena", "Vivian", "Amy", "Evelyn", "Gloria", "Irina",
                        "Melina", "Ina", "Elvira", "Helena", "Raphaela", "Sabrina", "Alicia", "Emely", "Eliana", "Linda",
                        "Marlene", "Stella", "Theresa", "Beatrice", "Helene", "Ines", "Veronika", "Frida", "Maja", "Aurora",
                        "Lisbeth", "Lorena", "Amelia", "Diana", "Isa", "Rosalie", "Ruth", "Yara", "Alma", "Mira"
                      ],
                    'second': [
                        "Schmidt", "Müller", "Wagner", "Schneider", "Fischer", "Weber", "Meyer", "Huber", "Hofer", "Gruber",
                        "Leitner", "Steiner", "Schmid", "Maier", "Eder", "Bauer", "Winkler", "Auer", "Pichler", "Berger",
                        "Fuchs", "Wallner", "Mayr", "Lang", "Schwarz", "Fischer", "Wimmer", "Hofmann", "Lechner", "Moser",
                        "Eder", "Neumann", "Haas", "Hofmann", "Winkler", "Koller", "Wolf", "Leitner", "Wagner", "Grün",
                        "Herrmann", "Binder", "Aigner", "Schuster", "Richter", "Herzog", "Schwarz", "Fiala", "Scholz",
                        "Fröhlich", "Hermann", "Haas", "Hess", "Lederer", "Lang", "Zimmermann", "Schubert", "Brunner",
                        "Resch", "Reiter", "Fritz", "Gruber", "Brunner", "Schmidt", "Brandtner", "Moser", "Leitner",
                        "Gross", "Egger", "Wieser", "Reiter", "Bach", "Kramer", "Pfeiffer", "Stadler", "Weiss", "Sailer",
                        "Bauer", "Schreiber", "Lechner", "Scholz", "Fröhlich", "Wimmer", "Eder", "Reiter", "Koch", "Roth",
                        "Leitner", "Sauer"
                      ]
                }
            }
        }},
    'Azerbaijan': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Ali", "Nizami", "Vagif", "Javid", "Samir", "Elchin", "Farid", "Rauf", "Fikret", "Murad",
                        "Rasim", "Orkhan", "Turan", "Ramil", "Elnur", "Nadir", "Kamran", "Sadiq", "Emin", "Vusal",
                        "Rashad", "Huseyn", "Fuad", "Aydin", "Zaur", "Nijat", "Eldar", "Kanan", "Vidadi", "Ramin",
                        "Namig", "Elmir", "Elnur", "Farrukh", "Jahangir", "Azer", "Togrul", "Arif", "Rovshan", "Teymur",
                        "Ilham", "Anar", "Elman", "Vahid", "Araz", "Shahin", "Alikhan", "Jamal", "Aras", "Sabir",
                        "Suleyman", "Rustam", "Emil", "Seymur", "Gadir", "Vidadi", "Nasir", "Kamil", "Tofiq", "Zakir",
                        "Tahir", "Hikmet", "Jalal", "Rizvan", "Anvar", "Elvin", "Mubariz", "Khalid", "Sabuhi", "Afgan",
                        "Toghrul", "Agil", "Valeh", "Rustam", "Majid", "Bahram", "Arslan", "Efsane", "Rashid", "Safar",
                        "Mammad", "Gurban", "Ferid", "Arman", "Teyyub", "Yashar", "Zakariya", "Fayaz", "Rahman", "Turkhan"
                      ],
                    'second': [
                        'Aliyev',     'Mammadov',  'Huseynov',
                        'Ismayilov',  'Rahimov',   'Guliyev',
                        'Mustafayev', 'Jafarov',   'Ahmadov',
                        'Safarov',    'Abbasov',   'Nasirov',
                        'Hasanov',    'Hajiyev',   'Mirzayev',
                        'Gurbanov',   'Orujov',    'Agayev',
                        'Makhmudov', 'Mammadzade', 'Aslanov',
                        'Mikayilov', 'Abdullayev', 'Rustamov',
                        'Suleymanov', 'Huseynli',   'Javadov',
                        'Gasimov', 'Eminov',     'Bayramov',
                        'Huseynzade'
                      ]
                },
                'female': {
                    'first': [
                        "Aysel", "Gulnar", "Leyla", "Nigar", "Sabina", "Nargiz", "Ayla", "Sevinj", "Laman", "Samira",
                        "Gunay", "Leyli", "Fidan", "Feride", "Narmin", "Aytac", "Vusala", "Vafa", "Ruhangiz", "Sema",
                        "Turkan", "Firuza", "Zuleyha", "Gunel", "Sevda", "Tale", "Aysun", "Laman", "Aygun", "Aynur",
                        "Nisa", "Aydan", "Rabia", "Nazrin", "Zarina", "Narmin", "Araz", "Nazila", "Yegane", "Laman",
                        "Vildan", "Feruze", "Zara", "Kamala", "Banu", "Ulviyya", "Nayla", "Parvana", "Lale", "Vafa",
                        "Lamiya", "Gunesh", "Gulnaz", "Yasmin", "Raziya", "Gulbeniz", "Roya", "Mina", "Nuray", "Sabirin",
                        "Elnare", "Gunesh", "Nurane", "Hafiza", "Zeynab", "Nazaket", "Gulnar", "Fidan", "Nuray", "Gulyar",
                        "Yegane", "Laman", "Nahida", "Fargana", "Ulduz", "Afaq", "Ruhangiz", "Laman", "Zehra", "Malak",
                        "Nermin", "Sima", "Ayten", "Munavvar", "Parvana", "Nuray", "Arzu", "Gulnara", "Lala", "Turkan"
                      ],
                    'second': [
                        "Aliyeva", "Mammadova", "Huseynova", "Ismayilova", "Rahimova", "Guliyeva", "Mustafayeva", "Jafarova", "Ahmadova", "Safarova",
                        "Abbasova", "Nasirova", "Hasanova", "Hajiyeva", "Mirzayeva", "Gurbanova", "Orujova", "Quliyeva", "Agayeva", "Quliyeva",
                        "Makhmudova", "Mammadzade", "Aslanova", "Mikayilova", "Guliyeva", "Mahmudova", "Ismayilova", "Hasanova", "Jafarova", "Abdullayeva",
                        "Rustamova", "Gurbanova", "Suleymanova", "Rahimova", "Huseynli", "Mammadova", "Aliyeva", "Abbasova", "Quliyeva", "Ahmadova", "Hajiyeva",
                        "Javadova", "Gasimova", "Eminova", "Bayramova", "Safarova", "Nasirova", "Aliyeva", "Ismayilova", "Mirzayeva", "Gurbanova", "Rahimova",
                        "Mustafayeva", "Hajiyeva", "Huseynova", "Jafarova", "Safarova", "Abbasova", "Guliyeva", "Nasirova", "Rustamova", "Quliyeva", "Mammadzade",
                        "Huseynzade", "Javadova", "Aslanova", "Mikayilova", "Aliyeva", "Abdullayeva", "Rahimova", "Gurbanova", "Safarova", "Bayramova", "Hajiyeva",
                        "Eminova", "Suleymanova", "Nasirova", "Mammadova", "Guliyeva", "Mustafayeva", "Jafarova", "Ismayilova", "Abbasova", "Rustamova", "Aliyeva",
                        "Safarova", "Huseynova", "Quliyeva", "Rahimova", "Nasirova", "Mirzayeva", "Mustafayeva", "Abbasova", "Jafarova", "Suleymanova", "Mammadzade"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Əli", "Nizami", "Vağif", "Cavid", "Səmirqulu", "Elçin", "Fərid", "Rauf", "Fikrət", "Murad",
                        "Rəsim", "Orxan", "Turan", "Ramil", "Elnur", "Nadir", "Kamran", "Sadiq", "Əmin", "Vüsal",
                        "Rəşad", "Hüseyn", "Fuad", "Aydın", "Zaur", "Nicat", "Eldar", "Kanan", "Vidadi", "Rəmin",
                        "Namiq", "Elmir", "Əlnur", "Fərux", "CəngiƏr", "Azer", "Toğrul", "Ərif", "Rövşən", "Teymur",
                        "İlham", "Anar", "Elman", "Vahid", "Araz", "Şahin", "Alixan", "Cəmal", "Əras", "Sabir",
                        "Süleyman", "Rüstəm", "Əmil", "Seymur", "Qədir", "Vidadi", "Nasir", "Kamil", "Tofiq", "Zakir",
                        "Tahir", "Hikmət", "Cəlal", "Rizvan", "Anvar", "Elvin", "Mübariz", "Xalid", "Sabuhi", "Afqan",
                        "Toğrul", "Əqil", "Valeh", "Rüstəm", "Mecid", "Bəhram", "Arslan", "Əfsanə", "Rəşid", "Səfər",
                        "Məmməd", "Qurban", "Fərid", "Ərman", "Teyyub", "Yəşar", "Zakariya", "Fayaz", "Rəhman", "Türxan"
                      ],
                    'second':  [
                        'Əliyev',     'Məmmədov',   'Hüseynov',
                        'İsmayılov',  'Rəhimov',    'Quliyev',
                        'Mustafayev', 'Cəfərov',    'Əhmədov',
                        'Səfərov',    'Abbasov',    'Nəsirov',
                        'Həsənov',    'Hacıyev',    'Mirzəyev',
                        'Qurbanov',   'Orucov',     'Əğayev',
                        'Məhmudov',   'Məmmədzadə', 'Aslanov',
                        'Mikayılov',  'Abdullayev', 'Rüstəmov',
                        'Süleymanov', 'Hüseynli',   'Cavadov',
                        'Qasımov',    'Əminov',     'Bayramov',
                        'Hüseynzadə'
                      ]
                },
                'female': {
                    'first': [
                        "Aysel", "Gülnar", "Leyla", "Nigar", "Sabina", "Nərgiz", "Ayla", "Sevinc", "Laman", "Samira",
                        "Günay", "Leyli", "Fidan", "Fəridə", "Nərmin", "Aytac", "Vüsala", "Vəfa", "Ruhangi̇z", "Səma",
                        "Turkan", "Firuzə", "Züleyxa", "Günəl", "Sevda", "Talə", "Aysun", "Laman", "Aygun", "Aynur",
                        "Nisa", "Aydan", "Rəbiyə", "Nazrin", "Zərinə", "Nərmin", "Araz", "Nazila", "Yegane", "Laman",
                        "Vildan", "Fərüzə", "Zara", "Kamala", "Banu", "Ülviyyə", "Nayla", "Parvana", "Lala", "Vəfa",
                        "Lamiya", "Günəş", "Gülnaz", "Yasmin", "Raziya", "Gülbəniz", "Röya", "Mina", "Nuray", "Sabirin",
                        "Elnarə", "Günəş", "Nurənə", "Hafiza", "Zeynab", "Nazakət", "Gülnar", "Fidan", "Nuray", "Gülyar",
                        "Yegane", "Laman", "Nahida", "Fərqanə", "Ulduz", "Afaq", "Ruhangi̇z", "Laman", "Zehra", "Malak",
                        "Nərmin", "Sima", "Ayten", "Munavvar", "Parvana", "Nuray", "Arzu", "Gülnara", "Lala", "Turkan"
                      ],
                    'second': [
                        "Əliyeva", "Məmmədova", "Hüseynova", "İsmayılova", "Rəhimova", "Quliyeva", "Mustafayeva", "Cəfərova", "Əhmədova", "Səfərova",
                        "Abbasova", "Nəsirova", "Həsənova", "Hacıyeva", "Mirzəyeva", "Qurbanova", "Orucova", "Quliyeva", "Əğayeva", "Quliyeva",
                        "Məxmudova", "Məmmədzadə", "Aslanova", "Mikayılova", "Quliyeva", "Məxmudova", "İsmayılova", "Həsənova", "Cəfərova", "Abdullayeva",
                        "Rüstəmova", "Qurbanova", "Süleymanova", "Rəhimova", "Hüseynli", "Məmmədova", "Əliyeva", "Abbasova", "Quliyeva", "Əhmədova", "Hacıyeva",
                        "Cavadova", "Qasırova", "Əminova", "Bayramova", "Səfərova", "Nəsirova", "Əliyeva", "İsmayılova", "Mirzəyeva", "Qurbanova", "Rəhimova",
                        "Mustafayeva", "Hacıyeva", "Hüseynova", "Cəfərova", "Səfərova", "Abbasova", "Quliyeva", "Nəsirova", "Rüstəmova", "Quliyeva", "Məmmədzadə",
                        "Hüseynzadə", "Cavadova", "Aslanova", "Mikayılova", "Əliyeva", "Abdullayeva", "Rəhimova", "Qurbanova", "Səfərova", "Bayramova", "Hacıyeva",
                        "Əminova", "Süleymanova", "Nəsirova", "Məmmədova", "Quliyeva", "Mustafayeva", "Cəfərova", "İsmayılova", "Abbasova", "Rüstəmova", "Əliyeva",
                        "Səfərova", "Hüseynova", "Quliyeva", "Rəhimova", "Nəsirova", "Mirzəyeva", "Mustafayeva", "Abbasova", "Cəfərova", "Süleymanova", "Məmmədzadə"
                      ],
                }
            }
        }},
    'Albania': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Adrian", "Besnik", "Dritan", "Elton", "Fatmir", "Genc", "Hasan", "Ilir", "Jon", "Kreshnik",
                        "Liridon", "Maks", "Nertil", "Oltion", "Petrit", "Qemal", "Renato", "Skender", "Taulant", "Urim",
                        "Vasil", "Xhavit", "Ylli", "Zef", "Agron", "Blerim", "Dashamir", "Erjon", "Flamur", "Gentian",
                        "Hektor", "Ismet", "Jurgen", "Kliton", "Luan", "Mikel", "Naim", "Olsi", "Përparim", "Qamil",
                        "Ramadan", "Saimir", "Taulant", "Urim", "Viktor", "Xhevahir", "Ylber", "Zaim", "Arben", "Bujar",
                        "Dorian", "Endrit", "Fatos", "Gjergj", "Ilaz", "Jozef", "Kastriot", "Lum", "Marjan", "Nik",
                        "Oltion", "Pajtim", "Qëndrim", "Redi", "Shpëtim", "Tedi", "Urim", "Valon", "Xhulio", "Yll",
                        "Zoti", "Artan", "Bardhyl", "Dardan", "Edon", "Flori", "Gazi", "Ilion", "Jonuz", "Kozma",
                        "Lek", "Milazim", "Nevruz", "Ornel", "Pëllumb", "Qëndrore", "Ramush", "Shemsi", "Tahir", "Uendi",
                        "Vigan", "Xhorxh", "Yllmir", "Zaim", "Ardit", "Bujen", "Dren", "Elham", "Fation", "Gjini"
                      ],
                    'second': [
                        "Krasniqi", "Qorri", "Rama", "Gashi", "Gjonaj", "Xhaka", "Krasniqi", "Thaçi", "Lleshi", "Maloku",
                        "Vllasaliu", "Hoxha", "Kuka", "Elezi", "Krasniqi", "Lala", "Ibrahimi", "Kryeziu", "Selimi", "Krasniqi",
                        "Zeneli", "Mustafa", "Kukaj", "Shala", "Rexhepi", "Veliu", "Gecaj", "Mehmeti", "Hyseni", "Shoshi",
                        "Lushi", "Kelmendi", "Tahiri", "Gjokaj", "Hasani", "Xhema", "Gega", "Pula", "Krasniqi", "Zeneli",
                        "Ahmeti", "Rrahmani", "Islami", "Zogaj", "Krasniqi", "Bytyqi", "Thaçi", "Krasniqi", "Imeri", "Xhaferi",
                        "Kukaj", "Lleshi", "Shala", "Lala", "Rexhepi", "Ibrahimi", "Hoxha", "Gashi", "Krasniqi", "Kelmendi",
                        "Mustafa", "Tahiri", "Zeneli", "Rama", "Gjokaj", "Veliu", "Hyseni", "Lushi", "Elezi", "Xhaka",
                        "Gecaj", "Vllasaliu", "Xhema", "Shoshi", "Gjonaj", "Shala", "Hoxha", "Veliu", "Zogaj", "Krasniqi",
                        "Islami", "Imeri", "Xhaferi", "Gjega", "Pula", "Gashi", "Krasniqi", "Bytyqi", "Thaçi", "Gega",
                        "Lala", "Zeneli", "Mustafa", "Imeri", "Hyseni", "Shala", "Krasniqi", "Lushi", "Gjokaj", "Elezi"
                      ]
                },
                'female': {
                    'first': [
                        "Adelina", "Besa", "Dafina", "Elira", "Flaka", "Genta", "Hana", "Ilira", "Jona", "Klea",
                        "Lira", "Marsela", "Nita", "Ornela", "Petronela", "Qendresa", "Rina", "Suela", "Tea", "Uarda",
                        "Valbona", "Xhoana", "Yllka", "Zeta", "Antigona", "Bukurije", "Diana", "Ermira", "Fjolla", "Gresa",
                        "Hera", "Inesa", "Jehona", "Krenare", "Luljeta", "Megi", "Njomza", "Oneda", "Pranvera", "Qëndore",
                        "Rovena", "Shpresa", "Teuta", "Uarda", "Valza", "Xhilda", "Yllka", "Zana", "Arbëresha", "Blerta",
                        "Drita", "Endrina", "Fjolla", "Gresa", "Hava", "Ilira", "Jehona", "Klea", "Lindi", "Marsida",
                        "Njomza", "Oriana", "Pranvera", "Qëndesa", "Rina", "Shpresa", "Tea", "Uendi", "Valbona", "Xhilda",
                        "Yllka", "Zeta", "Anjeza", "Bukuroshe", "Dafina", "Era", "Flutura", "Gresa", "Helena", "Inesa",
                        "Jona", "Klevisa", "Lara", "Megi", "Nora", "Orinda", "Pjeterdina", "Qamile", "Rea", "Shpresa",
                        "Tereza", "Uarda", "Valbona", "Xhensila", "Yllka", "Zara"
                      ],
                    'second': [
                        "Krasniqi", "Qorri", "Rama", "Gashi", "Gjonaj", "Xhaka", "Krasniqi", "Thaçi", "Lleshi", "Maloku",
                        "Vllasaliu", "Hoxha", "Kuka", "Elezi", "Krasniqi", "Lala", "Ibrahimi", "Kryeziu", "Selimi", "Krasniqi",
                        "Zeneli", "Mustafa", "Kukaj", "Shala", "Rexhepi", "Veliu", "Gecaj", "Mehmeti", "Hyseni", "Shoshi",
                        "Lushi", "Kelmendi", "Tahiri", "Gjokaj", "Hasani", "Xhema", "Gega", "Pula", "Krasniqi", "Zeneli",
                        "Ahmeti", "Rrahmani", "Islami", "Zogaj", "Krasniqi", "Bytyqi", "Thaçi", "Krasniqi", "Imeri", "Xhaferi",
                        "Kukaj", "Lleshi", "Shala", "Lala", "Rexhepi", "Ibrahimi", "Hoxha", "Gashi", "Krasniqi", "Kelmendi",
                        "Mustafa", "Tahiri", "Zeneli", "Rama", "Gjokaj", "Veliu", "Hyseni", "Lushi", "Elezi", "Xhaka",
                        "Gecaj", "Vllasaliu", "Xhema", "Shoshi", "Gjonaj", "Shala", "Hoxha", "Veliu", "Zogaj", "Krasniqi",
                        "Islami", "Imeri", "Xhaferi", "Gjega", "Pula", "Gashi", "Krasniqi", "Bytyqi", "Thaçi", "Gega",
                        "Lala", "Zeneli", "Mustafa", "Imeri", "Hyseni", "Shala", "Krasniqi", "Lushi", "Gjokaj", "Elezi"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Adrian", "Besnik", "Dritan", "Elton", "Fatmir", "Genc", "Hasan", "Ilir", "Jon", "Kreshnik",
                        "Liridon", "Maks", "Nertil", "Oltion", "Petrit", "Qemal", "Renato", "Skënder", "Taulant", "Urim",
                        "Vasil", "Xhavit", "Ylli", "Zef", "Agron", "Blerim", "Dashamir", "Erjon", "Flamur", "Gentian",
                        "Hektor", "Ismet", "Jurgen", "Kliton", "Luan", "Mikel", "Naim", "Olsi", "Përparim", "Qamil",
                        "Ramazan", "Saimir", "Taulant", "Urim", "Viktor", "Xhevahir", "Ylber", "Zaim", "Arben", "Bujar",
                        "Dorian", "Endrit", "Fatos", "Gjergj", "Ilaz", "Jozef", "Kastriot", "Lum", "Marjan", "Nik",
                        "Oltion", "Pajtim", "Qëndrim", "Redi", "Shpëtim", "Tedi", "Urim", "Valon", "Xhulio", "Yll",
                        "Zoti", "Artan", "Bardhyl", "Dardan", "Edon", "Flori", "Gazi", "Ilion", "Jonuz", "Kozma",
                        "Lek", "Milazim", "Nevruz", "Ornel", "Pëllumb", "Qëndrore", "Ramush", "Shemsi", "Tahir", "Uendi",
                        "Vigan", "Xhorxh", "Yllmir", "Zaim", "Ardit", "Bujen", "Dren", "Elham", "Fation", "Gjini"
                      ],
                    'second': [
                        "Krasniqi", "Qorri", "Rama", "Gashi", "Gjonaj", "Xhaka", "Krasniqi", "Thaçi", "Lleshi", "Maloku",
                        "Vllasaliu", "Hoxha", "Kuka", "Elezi", "Krasniqi", "Lala", "Ibrahimi", "Kryeziu", "Selimi", "Krasniqi",
                        "Zeneli", "Mustafa", "Kukaj", "Shala", "Rexhepi", "Veliu", "Gecaj", "Mehmeti", "Hyseni", "Shoshi",
                        "Lushi", "Kelmendi", "Tahiri", "Gjokaj", "Hasani", "Xhema", "Gega", "Pula", "Krasniqi", "Zeneli",
                        "Ahmeti", "Rrahmani", "Islami", "Zogaj", "Krasniqi", "Bytyqi", "Thaçi", "Krasniqi", "Imeri", "Xhaferi",
                        "Kukaj", "Lleshi", "Shala", "Lala", "Rexhepi", "Ibrahimi", "Hoxha", "Gashi", "Krasniqi", "Kelmendi",
                        "Mustafa", "Tahiri", "Zeneli", "Rama", "Gjokaj", "Veliu", "Hyseni", "Lushi", "Elezi", "Xhaka",
                        "Gecaj", "Vllasaliu", "Xhema", "Shoshi", "Gjonaj", "Shala", "Hoxha", "Veliu", "Zogaj", "Krasniqi",
                        "Islami", "Imeri", "Xhaferi", "Gjega", "Pula", "Gashi", "Krasniqi", "Bytyqi", "Thaçi", "Gega",
                        "Lala", "Zeneli", "Mustafa", "Imeri", "Hyseni", "Shala", "Krasniqi", "Lushi", "Gjokaj", "Elezi"
                      ]
                },
                'female': {
                    'first': [
                        "Adelina", "Besa", "Dafina", "Elira", "Flaka", "Genta", "Hana", "Ilira", "Jona", "Klea",
                        "Lira", "Marsela", "Nita", "Ornela", "Petronela", "Qendresa", "Rina", "Suela", "Tea", "Uarda",
                        "Valbona", "Xhoana", "Yllka", "Zeta", "Antigona", "Bukurije", "Diana", "Ermira", "Fjolla", "Gresa",
                        "Hera", "Inesa", "Jehona", "Krenare", "Luljeta", "Megi", "Njomza", "Oneda", "Pranvera", "Qëndore",
                        "Rovena", "Shpresa", "Teuta", "Uarda", "Valza", "Xhilda", "Yllka", "Zana", "Arbëresha", "Blerta",
                        "Drita", "Endrina", "Fjolla", "Gresa", "Hava", "Ilira", "Jehona", "Klea", "Lindi", "Marsida",
                        "Njomza", "Oriana", "Pranvera", "Qëndesa", "Rina", "Shpresa", "Tea", "Uendi", "Valbona", "Xhilda",
                        "Yllka", "Zeta", "Anjeza", "Bukuroshe", "Dafina", "Era", "Flutura", "Gresa", "Helena", "Inesa",
                        "Jona", "Klevisa", "Lara", "Megi", "Nora", "Orinda", "Pjeterdina", "Qamile", "Rea", "Shpresa",
                        "Tereza", "Uarda", "Valbona", "Xhensila", "Yllka", "Zara"
                      ],
                    'second': [
                        "Krasniqi", "Qorri", "Rama", "Gashi", "Gjonaj", "Xhaka", "Krasniqi", "Thaçi", "Lleshi", "Maloku",
                        "Vllasaliu", "Hoxha", "Kuka", "Elezi", "Krasniqi", "Lala", "Ibrahimi", "Kryeziu", "Selimi", "Krasniqi",
                        "Zeneli", "Mustafa", "Kukaj", "Shala", "Rexhepi", "Veliu", "Gecaj", "Mehmeti", "Hyseni", "Shoshi",
                        "Lushi", "Kelmendi", "Tahiri", "Gjokaj", "Hasani", "Xhema", "Gega", "Pula", "Krasniqi", "Zeneli",
                        "Ahmeti", "Rrahmani", "Islami", "Zogaj", "Krasniqi", "Bytyqi", "Thaçi", "Krasniqi", "Imeri", "Xhaferi",
                        "Kukaj", "Lleshi", "Shala", "Lala", "Rexhepi", "Ibrahimi", "Hoxha", "Gashi", "Krasniqi", "Kelmendi",
                        "Mustafa", "Tahiri", "Zeneli", "Rama", "Gjokaj", "Veliu", "Hyseni", "Lushi", "Elezi", "Xhaka",
                        "Gecaj", "Vllasaliu", "Xhema", "Shoshi", "Gjonaj", "Shala", "Hoxha", "Veliu", "Zogaj", "Krasniqi",
                        "Islami", "Imeri", "Xhaferi", "Gjega", "Pula", "Gashi", "Krasniqi", "Bytyqi", "Thaçi", "Gega",
                        "Lala", "Zeneli", "Mustafa", "Imeri", "Hyseni", "Shala", "Krasniqi", "Lushi", "Gjokaj", "Elezi"
                      ],
                }
            }
        }},
    'Andorra': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Marc", "Jordi", "Enric", "Antoni", "Gerard", "Carles", "Xavier", "Josep", "Pere", "Lluis",
                        "Ramon", "Albert", "Francesc", "Jaume", "David", "Eduard", "Mateu", "Oriol", "Ricard", "Santi",
                        "Miquel", "Joaquim", "Salvador", "Manel", "Alex", "Esteve", "Narcis", "Quim", "Guillem", "Javi",
                        "Victor", "Daniel", "Arnau", "Pol", "Jose", "Oscar", "Felix", "Martin", "Raul", "Gines",
                        "Xavier", "Emili", "Agusti", "Mariano", "Julio", "Isidre", "Fabio", "Pau", "Teo", "Angel",
                        "Agusti", "Ismael", "Tono", "Ivan", "Dani", "Marc", "Aitor", "Iker", "Sergio", "Ruben",
                        "Jon", "Abel", "Miguel", "Adrian", "Roberto", "Jorge", "Alvaro", "Gabriel", "Hugo", "Alfonso",
                        "Jesus", "Javier", "Diego", "Victor", "Alberto", "Carlos", "Juan", "Enrique", "Pedro", "Manuel",
                        "Miguel", "David", "Jose", "Francisco", "Antonio", "Alejandro", "Javier", "Jose Antonio", "Francisco Javier", "Jose Luis",
                        "Juan Carlos", "Jesus", "Miguel Angel", "Francisco Jose", "Angel", "Juan Jose", "Joaquin", "Jose Manuel", "Rafael", "Fernando"
                      ],
                    'second': [
                        "Martí", "Serra", "Valls", "Riba", "Pujol", "Martínez", "Vila", "Baró", "Aranda", "Riu",
                        "Miquel", "Costa", "Ricart", "Torres", "Ferrer", "Balaguer", "Nadal", "Bosch", "Palau", "Miró",
                        "Coma", "Xandrí", "Castelló", "Canut", "Font", "Salvador", "Torrent", "Borda", "Albó", "Reixach",
                        "Guàrdia", "Ribes", "Colom", "Mateu", "Aixas", "Forné", "Miró", "Arnal", "Santacana", "Borràs",
                        "Farré", "Massot", "Moreno", "Compte", "Enric", "Torner", "Busquets", "Anglada", "Isern", "Pérez",
                        "Ricci", "Guasch", "Fornols", "Sabaté", "Baró", "Beltran", "Jané", "Brossa", "Cros", "Xicolà",
                        "Grau", "Rafart", "Sanz", "Perera", "Giralt", "Rubió", "Martorell", "Xicolà", "Piera", "Fernández",
                        "Casals", "Cabot", "Comellas", "Molines", "Oliver", "Duran", "Pineda", "Rialp", "Rubiralta", "Sallent",
                        "Fernàndez", "Sureda", "Terradell", "Vinyals", "Estruch", "Casado", "Urgell", "Rigau", "Sala", "Flaquer",
                        "Viladomat", "Torró", "Vicente", "Cavaller", "Coll", "Calvet", "Cot", "Gili", "Barceló", "Grau"
                      ]
                },
                'female': {
                    'first': [
                        "Anna", "Laia", "Maria", "Elena", "Montserrat", "Laura", "Judith", "Nuria", "Marta", "Silvia",
                        "Sandra", "Roser", "Esther", "Pilar", "Cristina", "Ester", "Judit", "Adriana", "Mireia", "Lourdes",
                        "Carla", "Ariadna", "Natalia", "Eva", "Aina", "Alba", "Nerea", "Claudia", "Ainhoa", "Raquel",
                        "Carme", "Gemma", "Irene", "Aurora", "Lidia", "Clara", "Mercedes", "Dolores", "Isabel", "Elisabeth",
                        "Olga", "Beatriz", "Aurora", "Concepcion", "Nieves", "Natalia", "Inmaculada", "Teresa", "Angela",
                        "Monica", "Sofia", "Almudena", "Julia", "Ana Maria", "Virginia", "Rosa", "Consuelo", "Juana",
                        "Josefa", "Rocio", "Yolanda", "Alicia", "Victoria", "Catalina", "Luz", "Margarita", "Encarnacion",
                        "Amparo", "Daniela", "Emilia", "Esperanza", "Manuela", "Francisca", "Guadalupe", "Asuncion", "Milagros",
                        "Rafaela", "Antonia", "Concha", "Lola", "Diana", "Susana", "Noelia", "Sonia", "Vanessa", "Elena",
                        "Miriam", "Carmen", "Maria Jose", "Beatriz", "Patricia", "Nerea", "Ana", "Paz", "Lidia", "Rosa"
                      ],
                    'second': [
                        "Martí", "Serra", "Valls", "Riba", "Pujol", "Martínez", "Vila", "Baró", "Aranda", "Riu",
                        "Miquel", "Costa", "Ricart", "Torres", "Ferrer", "Balaguer", "Nadal", "Bosch", "Palau", "Miró",
                        "Coma", "Xandrí", "Castelló", "Canut", "Font", "Salvador", "Torrent", "Borda", "Albó", "Reixach",
                        "Guàrdia", "Ribes", "Colom", "Mateu", "Aixas", "Forné", "Miró", "Arnal", "Santacana", "Borràs",
                        "Farré", "Massot", "Moreno", "Compte", "Enric", "Torner", "Busquets", "Anglada", "Isern", "Pérez",
                        "Ricci", "Guasch", "Fornols", "Sabaté", "Baró", "Beltran", "Jané", "Brossa", "Cros", "Xicolà",
                        "Grau", "Rafart", "Sanz", "Perera", "Giralt", "Rubió", "Martorell", "Xicolà", "Piera", "Fernández",
                        "Casals", "Cabot", "Comellas", "Molines", "Oliver", "Duran", "Pineda", "Rialp", "Rubiralta", "Sallent",
                        "Fernàndez", "Sureda", "Terradell", "Vinyals", "Estruch", "Casado", "Urgell", "Rigau", "Sala", "Flaquer",
                        "Viladomat", "Torró", "Vicente", "Cavaller", "Coll", "Calvet", "Cot", "Gili", "Barceló", "Grau"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Marc", "Jordi", "Enric", "Antoni", "Gerard", "Carles", "Xavier", "Josep", "Pere", "Lluis",
                        "Ramon", "Albert", "Francesc", "Jaume", "David", "Eduard", "Mateu", "Oriol", "Ricard", "Santi",
                        "Miquel", "Joaquim", "Salvador", "Manel", "Alex", "Esteve", "Narcis", "Quim", "Guillem", "Javi",
                        "Victor", "Daniel", "Arnau", "Pol", "Jose", "Oscar", "Felix", "Martin", "Raul", "Gines",
                        "Xavier", "Emili", "Agusti", "Mariano", "Julio", "Isidre", "Fabio", "Pau", "Teo", "Angel",
                        "Agusti", "Ismael", "Tono", "Ivan", "Dani", "Marc", "Aitor", "Iker", "Sergio", "Ruben",
                        "Jon", "Abel", "Miguel", "Adrian", "Roberto", "Jorge", "Alvaro", "Gabriel", "Hugo", "Alfonso",
                        "Jesus", "Javier", "Diego", "Victor", "Alberto", "Carlos", "Juan", "Enrique", "Pedro", "Manuel",
                        "Miguel", "David", "Jose", "Francisco", "Antonio", "Alejandro", "Javier", "Jose Antonio", "Francisco Javier", "Jose Luis",
                        "Juan Carlos", "Jesus", "Miguel Angel", "Francisco Jose", "Angel", "Juan Jose", "Joaquin", "Jose Manuel", "Rafael", "Fernando"
                      ],
                    'second': [
                        "Martí", "Serra", "Valls", "Riba", "Pujol", "Martínez", "Vila", "Baró", "Aranda", "Riu",
                        "Miquel", "Costa", "Ricart", "Torres", "Ferrer", "Balaguer", "Nadal", "Bosch", "Palau", "Miró",
                        "Coma", "Xandrí", "Castelló", "Canut", "Font", "Salvador", "Torrent", "Borda", "Albó", "Reixach",
                        "Guàrdia", "Ribes", "Colom", "Mateu", "Aixas", "Forné", "Miró", "Arnal", "Santacana", "Borràs",
                        "Farré", "Massot", "Moreno", "Compte", "Enric", "Torner", "Busquets", "Anglada", "Isern", "Pérez",
                        "Ricci", "Guasch", "Fornols", "Sabaté", "Baró", "Beltran", "Jané", "Brossa", "Cros", "Xicolà",
                        "Grau", "Rafart", "Sanz", "Perera", "Giralt", "Rubió", "Martorell", "Xicolà", "Piera", "Fernández",
                        "Casals", "Cabot", "Comellas", "Molines", "Oliver", "Duran", "Pineda", "Rialp", "Rubiralta", "Sallent",
                        "Fernàndez", "Sureda", "Terradell", "Vinyals", "Estruch", "Casado", "Urgell", "Rigau", "Sala", "Flaquer",
                        "Viladomat", "Torró", "Vicente", "Cavaller", "Coll", "Calvet", "Cot", "Gili", "Barceló", "Grau"
                      ]
                },
                'female': {
                    'first': [
                        "Anna", "Laia", "Maria", "Elena", "Montserrat", "Laura", "Judith", "Nuria", "Marta", "Silvia",
                        "Sandra", "Roser", "Esther", "Pilar", "Cristina", "Ester", "Judit", "Adriana", "Mireia", "Lourdes",
                        "Carla", "Ariadna", "Natalia", "Eva", "Aina", "Alba", "Nerea", "Claudia", "Ainhoa", "Raquel",
                        "Carme", "Gemma", "Irene", "Aurora", "Lidia", "Clara", "Mercedes", "Dolores", "Isabel", "Elisabeth",
                        "Olga", "Beatriz", "Aurora", "Concepcion", "Nieves", "Natalia", "Inmaculada", "Teresa", "Angela",
                        "Monica", "Sofia", "Almudena", "Julia", "Ana Maria", "Virginia", "Rosa", "Consuelo", "Juana",
                        "Josefa", "Rocio", "Yolanda", "Alicia", "Victoria", "Catalina", "Luz", "Margarita", "Encarnacion",
                        "Amparo", "Daniela", "Emilia", "Esperanza", "Manuela", "Francisca", "Guadalupe", "Asuncion", "Milagros",
                        "Rafaela", "Antonia", "Concha", "Lola", "Diana", "Susana", "Noelia", "Sonia", "Vanessa", "Elena",
                        "Miriam", "Carmen", "Maria Jose", "Beatriz", "Patricia", "Nerea", "Ana", "Paz", "Lidia", "Rosa"
                      ],
                    'second': [
                        "Martí", "Serra", "Valls", "Riba", "Pujol", "Martínez", "Vila", "Baró", "Aranda", "Riu",
                        "Miquel", "Costa", "Ricart", "Torres", "Ferrer", "Balaguer", "Nadal", "Bosch", "Palau", "Miró",
                        "Coma", "Xandrí", "Castelló", "Canut", "Font", "Salvador", "Torrent", "Borda", "Albó", "Reixach",
                        "Guàrdia", "Ribes", "Colom", "Mateu", "Aixas", "Forné", "Miró", "Arnal", "Santacana", "Borràs",
                        "Farré", "Massot", "Moreno", "Compte", "Enric", "Torner", "Busquets", "Anglada", "Isern", "Pérez",
                        "Ricci", "Guasch", "Fornols", "Sabaté", "Baró", "Beltran", "Jané", "Brossa", "Cros", "Xicolà",
                        "Grau", "Rafart", "Sanz", "Perera", "Giralt", "Rubió", "Martorell", "Xicolà", "Piera", "Fernández",
                        "Casals", "Cabot", "Comellas", "Molines", "Oliver", "Duran", "Pineda", "Rialp", "Rubiralta", "Sallent",
                        "Fernàndez", "Sureda", "Terradell", "Vinyals", "Estruch", "Casado", "Urgell", "Rigau", "Sala", "Flaquer",
                        "Viladomat", "Torró", "Vicente", "Cavaller", "Coll", "Calvet", "Cot", "Gili", "Barceló", "Grau"
                      ],
                }
            }
        }},
    'Armenia': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Arman", "Artur", "Davit", "Ashot", "Hayk", "Tigran", "Gevorg", "Karen", "Vardan", "Ruben",
                        "Suren", "Hakob", "Gagik", "Levon", "Aram", "Samvel", "Robert", "Sarkis", "Mher", "Narek",
                        "Edgar", "Rafael", "Gor", "Andranik", "Tigran", "Hovhannes", "Arsen", "Garegin", "Vahan", "Areg",
                        "Gurgen", "Hrant", "Areg", "Edik", "Vahe", "Areg", "Aramayis", "Zaven", "Zhirayr", "Hamlet",
                        "Vrezh", "Razmik", "Sevak", "Antranik", "Norayr", "Areg", "Hovsep", "Khachik", "Hovig", "Artashes",
                        "Gegham", "Hamo", "Raffi", "Varazdat", "Khoren", "Haykaz", "Nairi", "Aren", "Alik", "Artak",
                        "Vigen", "Artyom", "Hmayak", "Daron", "Davit", "Haygazun", "Koryun", "Taron", "Zohrab", "Grigor",
                        "Ardashes", "Arshak", "Ardavast", "Aregak", "Gevork", "Khachatur", "Khajag", "Misak", "Movses", "Nareg",
                        "Poghos", "Sahak", "Saribek", "Sarkis", "Stepan", "Tadevos", "Toros", "Touman", "Tsaghik", "Vartan",
                        "Viken", "Voskan", "Yeghishe", "Zarmayr", "Zoravar", "Zorik", "Zorikto", "Zorikto", "Zorian", "Zorikto"
                      ],
                    'second': [
                        "Aleksanyan", "Mirzoyan", "Karapetyan", "Sargsyan", "Tatulyan", "Hayrapetyan", "Gasparyan", "Aleysyan", "Nazaryan", "Khachatryan",
                        "Davydyan", "Khachikyan", "Halabyan", "Vardanyan", "Grigoryan", "Abelyan", "Movsisyan", "Adamyan", "Bagratyan", "Martirosyan",
                        "Manukyan", "Arakelyan", "Bagdasaryan", "Galustyan", "Nikolayan", "Arzumanyan", "Adalyan", "Harutyunyan", "Gustaghyan", "Danyelyan",
                        "Mukhadyan", "Araratyan", "Dukhayan", "Malakhyanyan", "Khachatrian", "Muradyan", "Nazaryan", "Asatryan", "Kamalyan", "Armenian",
                        "Sevakyan", "Hovsepyan", "Sogomonyan", "Gulparanyan", "Darbinyan", "Minasyan", "Arshakyan", "Nasranyan", "Dumanyan", "Armanyan",
                        "Khachatryan", "Azgamikyan", "Margaryan", "Bagdasaryan", "Hakobyan", "Avagyan", "Hakobyan", "Gabrielyan", "Yeghiazaryan", "Aghajanyan",
                        "Asoyan", "Gevorgyan", "Israelyan", "Ispiryan", "Kazaryan", "Kazanjian", "Karagulyan", "Khachadourian", "Kharazyan", "Khatchadourian",
                        "Khojayan", "Kirakosyan", "Kocharyan", "Kurkjian", "Kurumlian", "Manaseryan", "Manoukian", "Margaryan", "Matevosyan", "Mazmanyan",
                        "Mkhitaryan", "Movsesian", "Nadjarian", "Nalbandian", "Nazarian", "Nersesian", "Ohanian", "Ouzounian", "Papazian", "Parsanian",
                        "Partamian", "Petrosyan", "Saghatelyan", "Sahagian", "Sarkisian", "Saroyan", "Sedrakyan", "Sepanian", "Soghomonyan", "Sukiasian",
                        "Tatoulian", "Terzian", "Topalian", "Torosian", "Tumasyan", "Vartanian", "Vartazarian", "Vartkesian", "Yacoubian", "Yeghiazarian"
                      ]
                },
                'female': {
                    'first': [
                        "Anahit", "Mariam", "Tatev", "Lusine", "Narine", "Arevik", "Anna", "Arpine", "Hasmik", "Liana",
                        "Siranush", "Gayane", "Ruzanna", "Satenik", "Lucine", "Armine", "Marine", "Nona", "Ani", "Silva",
                        "Varduhi", "Hranush", "Lilit", "Aida", "Lara", "Lusaber", "Irina", "Lara", "Shushan", "Shoghik",
                        "Hripsime", "Hasmik", "Liana", "Anahit", "Siranush", "Elena", "Anush", "Ivet", "Astghik", "Anushik",
                        "Arpi", "Naira", "Diana", "Gohar", "Zara", "Hermine", "Irina", "Karina", "Natalie", "Nune",
                        "Vardanush", "Rima", "Lusine", "Liana", "Lusine", "Siranush", "Marine", "Lilit", "Arpi", "Nune",
                        "Ruzanna", "Satik", "Shushan", "Svetlana", "Tigranuhi", "Tatevik", "Tsovinar", "Varditer", "Veronika", "Violeta",
                        "Yulia", "Zara", "Armine", "Ani", "Marine", "Aida", "Zara", "Hripsime", "Silva", "Anushik",
                        "Diana", "Shoghik", "Ani", "Narine", "Satik", "Ruzanna", "Anahit", "Arpi", "Lusine", "Siranush",
                        "Varduhi", "Armine", "Hermine", "Rima", "Nona", "Lara", "Nune", "Ivet", "Hasmik", "Lilit"
                      ],
                    'second': [
                        "Aleksanyan", "Mirzoyan", "Karapetyan", "Sargsyan", "Tatulyan", "Hayrapetyan", "Gasparyan", "Aleysyan", "Nazaryan", "Khachatryan",
                        "Davydyan", "Khachikyan", "Halabyan", "Vardanyan", "Grigoryan", "Abelyan", "Movsisyan", "Adamyan", "Bagratyan", "Martirosyan",
                        "Manukyan", "Arakelyan", "Bagdasaryan", "Galustyan", "Nikolayan", "Arzumanyan", "Adalyan", "Harutyunyan", "Gustaghyan", "Danyelyan",
                        "Mukhadyan", "Araratyan", "Dukhayan", "Malakhyanyan", "Khachatrian", "Muradyan", "Nazaryan", "Asatryan", "Kamalyan", "Armenian",
                        "Sevakyan", "Hovsepyan", "Sogomonyan", "Gulparanyan", "Darbinyan", "Minasyan", "Arshakyan", "Nasranyan", "Dumanyan", "Armanyan",
                        "Khachatryan", "Azgamikyan", "Margaryan", "Bagdasaryan", "Hakobyan", "Avagyan", "Hakobyan", "Gabrielyan", "Yeghiazaryan", "Aghajanyan",
                        "Asoyan", "Gevorgyan", "Israelyan", "Ispiryan", "Kazaryan", "Kazanjian", "Karagulyan", "Khachadourian", "Kharazyan", "Khatchadourian",
                        "Khojayan", "Kirakosyan", "Kocharyan", "Kurkjian", "Kurumlian", "Manaseryan", "Manoukian", "Margaryan", "Matevosyan", "Mazmanyan",
                        "Mkhitaryan", "Movsesian", "Nadjarian", "Nalbandian", "Nazarian", "Nersesian", "Ohanian", "Ouzounian", "Papazian", "Parsanian",
                        "Partamian", "Petrosyan", "Saghatelyan", "Sahagian", "Sarkisian", "Saroyan", "Sedrakyan", "Sepanian", "Soghomonyan", "Sukiasian",
                        "Tatoulian", "Terzian", "Topalian", "Torosian", "Tumasyan", "Vartanian", "Vartazarian", "Vartkesian", "Yacoubian", "Yeghiazarian"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Arman", "Artur", "Davit", "Ashot", "Hayk", "Tigran", "Gevorg", "Karen", "Vardan", "Ruben",
                        "Suren", "Hakob", "Gagik", "Levon", "Aram", "Samvel", "Robert", "Sarkis", "Mher", "Narek",
                        "Edgar", "Rafael", "Gor", "Andranik", "Tigran", "Hovhannes", "Arsen", "Garegin", "Vahan", "Areg",
                        "Gurgen", "Hrant", "Areg", "Edik", "Vahe", "Areg", "Aramayis", "Zaven", "Zhirayr", "Hamlet",
                        "Vrezh", "Razmik", "Sevak", "Antranik", "Norayr", "Areg", "Hovsep", "Khachik", "Hovig", "Artashes",
                        "Gegham", "Hamo", "Raffi", "Varazdat", "Khoren", "Haykaz", "Nairi", "Aren", "Alik", "Artak",
                        "Vigen", "Artyom", "Hmayak", "Daron", "Davit", "Haygazun", "Koryun", "Taron", "Zohrab", "Grigor",
                        "Ardashes", "Arshak", "Ardavast", "Aregak", "Gevork", "Khachatur", "Khajag", "Misak", "Movses", "Nareg",
                        "Poghos", "Sahak", "Saribek", "Sarkis", "Stepan", "Tadevos", "Toros", "Touman", "Tsaghik", "Vartan",
                        "Viken", "Voskan", "Yeghishe", "Zarmayr", "Zoravar", "Zorik", "Zorikto", "Zorikto", "Zorian", "Zorikto"
                      ],
                    'second': [
                        "Aleksanyan", "Mirzoyan", "Karapetyan", "Sargsyan", "Tatulyan", "Hayrapetyan", "Gasparyan", "Aleysyan", "Nazaryan", "Khachatryan",
                        "Davydyan", "Khachikyan", "Halabyan", "Vardanyan", "Grigoryan", "Abelyan", "Movsisyan", "Adamyan", "Bagratyan", "Martirosyan",
                        "Manukyan", "Arakelyan", "Bagdasaryan", "Galustyan", "Nikolayan", "Arzumanyan", "Adalyan", "Harutyunyan", "Gustaghyan", "Danyelyan",
                        "Mukhadyan", "Araratyan", "Dukhayan", "Malakhyanyan", "Khachatrian", "Muradyan", "Nazaryan", "Asatryan", "Kamalyan", "Armenian",
                        "Sevakyan", "Hovsepyan", "Sogomonyan", "Gulparanyan", "Darbinyan", "Minasyan", "Arshakyan", "Nasranyan", "Dumanyan", "Armanyan",
                        "Khachatryan", "Azgamikyan", "Margaryan", "Bagdasaryan", "Hakobyan", "Avagyan", "Hakobyan", "Gabrielyan", "Yeghiazaryan", "Aghajanyan",
                        "Asoyan", "Gevorgyan", "Israelyan", "Ispiryan", "Kazaryan", "Kazanjian", "Karagulyan", "Khachadourian", "Kharazyan", "Khatchadourian",
                        "Khojayan", "Kirakosyan", "Kocharyan", "Kurkjian", "Kurumlian", "Manaseryan", "Manoukian", "Margaryan", "Matevosyan", "Mazmanyan",
                        "Mkhitaryan", "Movsesian", "Nadjarian", "Nalbandian", "Nazarian", "Nersesian", "Ohanian", "Ouzounian", "Papazian", "Parsanian",
                        "Partamian", "Petrosyan", "Saghatelyan", "Sahagian", "Sarkisian", "Saroyan", "Sedrakyan", "Sepanian", "Soghomonyan", "Sukiasian",
                        "Tatoulian", "Terzian", "Topalian", "Torosian", "Tumasyan", "Vartanian", "Vartazarian", "Vartkesian", "Yacoubian", "Yeghiazarian"
                      ]
                },
                'female': {
                    'first': [
                        "Anahit", "Mariam", "Tatev", "Lusine", "Narine", "Arevik", "Anna", "Arpine", "Hasmik", "Liana",
                        "Siranush", "Gayane", "Ruzanna", "Satenik", "Lucine", "Armine", "Marine", "Nona", "Ani", "Silva",
                        "Varduhi", "Hranush", "Lilit", "Aida", "Lara", "Lusaber", "Irina", "Lara", "Shushan", "Shoghik",
                        "Hripsime", "Hasmik", "Liana", "Anahit", "Siranush", "Elena", "Anush", "Ivet", "Astghik", "Anushik",
                        "Arpi", "Naira", "Diana", "Gohar", "Zara", "Hermine", "Irina", "Karina", "Natalie", "Nune",
                        "Vardanush", "Rima", "Lusine", "Liana", "Lusine", "Siranush", "Marine", "Lilit", "Arpi", "Nune",
                        "Ruzanna", "Satik", "Shushan", "Svetlana", "Tigranuhi", "Tatevik", "Tsovinar", "Varditer", "Veronika", "Violeta",
                        "Yulia", "Zara", "Armine", "Ani", "Marine", "Aida", "Zara", "Hripsime", "Silva", "Anushik",
                        "Diana", "Shoghik", "Ani", "Narine", "Satik", "Ruzanna", "Anahit", "Arpi", "Lusine", "Siranush",
                        "Varduhi", "Armine", "Hermine", "Rima", "Nona", "Lara", "Nune", "Ivet", "Hasmik", "Lilit"
                      ],
                    'second': [
                        "Aleksanyan", "Mirzoyan", "Karapetyan", "Sargsyan", "Tatulyan", "Hayrapetyan", "Gasparyan", "Aleysyan", "Nazaryan", "Khachatryan",
                        "Davydyan", "Khachikyan", "Halabyan", "Vardanyan", "Grigoryan", "Abelyan", "Movsisyan", "Adamyan", "Bagratyan", "Martirosyan",
                        "Manukyan", "Arakelyan", "Bagdasaryan", "Galustyan", "Nikolayan", "Arzumanyan", "Adalyan", "Harutyunyan", "Gustaghyan", "Danyelyan",
                        "Mukhadyan", "Araratyan", "Dukhayan", "Malakhyanyan", "Khachatrian", "Muradyan", "Nazaryan", "Asatryan", "Kamalyan", "Armenian",
                        "Sevakyan", "Hovsepyan", "Sogomonyan", "Gulparanyan", "Darbinyan", "Minasyan", "Arshakyan", "Nasranyan", "Dumanyan", "Armanyan",
                        "Khachatryan", "Azgamikyan", "Margaryan", "Bagdasaryan", "Hakobyan", "Avagyan", "Hakobyan", "Gabrielyan", "Yeghiazaryan", "Aghajanyan",
                        "Asoyan", "Gevorgyan", "Israelyan", "Ispiryan", "Kazaryan", "Kazanjian", "Karagulyan", "Khachadourian", "Kharazyan", "Khatchadourian",
                        "Khojayan", "Kirakosyan", "Kocharyan", "Kurkjian", "Kurumlian", "Manaseryan", "Manoukian", "Margaryan", "Matevosyan", "Mazmanyan",
                        "Mkhitaryan", "Movsesian", "Nadjarian", "Nalbandian", "Nazarian", "Nersesian", "Ohanian", "Ouzounian", "Papazian", "Parsanian",
                        "Partamian", "Petrosyan", "Saghatelyan", "Sahagian", "Sarkisian", "Saroyan", "Sedrakyan", "Sepanian", "Soghomonyan", "Sukiasian",
                        "Tatoulian", "Terzian", "Topalian", "Torosian", "Tumasyan", "Vartanian", "Vartazarian", "Vartkesian", "Yacoubian", "Yeghiazarian"
                      ],
                }
            }
        }},
    'Belgium': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Lucas", "Liam", "Noah", "Ethan", "Adam", "Finn", "Victor", "Leo", "Arthur", "Gabriel",
                        "Maxime", "Louis", "Jules", "Oscar", "Mathis", "Théo", "Tom", "Milo", "Hugo", "Axel",
                        "Felix", "Matteo", "Emile", "Nathan", "Alexander", "Arthur", "Antoine", "Samuel", "Isaac", "Olivier",
                        "Benjamin", "Elias", "Simon", "Xander", "Mathias", "Baptiste", "David", "Daniel", "Michael", "Raphael",
                        "Tristan", "Cédric", "Vincent", "Julien", "Nicolas", "Christian", "Pierre", "Adrien", "André", "Georges",
                        "Luc", "Philippe", "Jacques", "Jean", "René", "Paul", "Henri", "Alain", "Marc", "Albert",
                        "Charles", "Denis", "Claude", "François", "Guy", "Pierre", "Roger", "Robert", "Thierry", "Yves",
                        "Patrick", "Eric", "David", "Serge", "Michel", "Jean-Paul", "Franck", "Alexandre", "Sylvain", "Grégoire",
                        "Jonathan", "Thierry", "Christophe", "Pascal", "Laurent", "Bruno", "Gilles", "Dominique", "Christophe", "Didier",
                        "Xavier", "Antoine", "Geoffrey", "Sébastien", "Emmanuel", "Fabrice", "Olivier", "Vincent", "Jerome", "Cyril"
                      ],
                    'second': [
                        "Dubois", "Janssens", "Willems", "Jacobs", "Mertens", "Martens", "Pauwels", "Lambert", "Hermans", "De Smet",
                        "Desmet", "Delvaux", "Lefevre", "Dewitte", "Lambrecht", "Goossens", "De Wilde", "Van den Berg", "Michiels", "Lefever",
                        "Vandenbergh", "Maes", "Vandenberghe", "Lacroix", "Baert", "Lemaire", "Dupont", "Dumont", "Dupuis", "Leroy",
                        "Simon", "Noel", "Dumont", "Fontaine", "Leclercq", "Lemaire", "Durant", "Van Hove", "Bakker", "Smeets",
                        "Vanderveken", "Wouters", "Peeters", "Janssen", "Vandenberg", "Vanderheyden", "Thijs", "De Cock", "Van Damme", "Dekker",
                        "Devos", "Declercq", "Vermeulen", "Vermeire", "Van Dyck", "De Backer", "Van de Velde", "Govaert", "Van Dijk", "De Boeck",
                        "Wouters", "Van Dyck", "Schmitz", "Vermeersch", "Vandewalle", "Vandecasteele", "Verheyen", "Vermeulen", "Van Dam", "Verhaeghe",
                        "De Groote", "Van Hout", "De Vries", "Wouters", "Van Den Bossche", "Van De Velde", "Willems", "Van Den Bosch", "Smet",
                        "Van Den Broeck", "Martens", "Pauwels", "Lemmens", "Bosmans", "Claes", "Van der Linden", "Van Der Heyden", "Vandenbossche", "Vanderlinden",
                        "Vandeweghe", "Verhaegen", "Verhulst", "Vermassen", "Vermeir", "Vandepitte", "Vanderpoel", "Vanderstraeten", "Vanderveeke", "Vanhercke"
                      ]
                },
                'female': {
                    'first': [
                        "Emma", "Olivia", "Ava", "Mila", "Ella", "Amelia", "Alice", "Charlotte", "Lina", "Zoe",
                        "Juliette", "Louise", "Léa", "Camille", "Lily", "Anna", "Lucie", "Nora", "Eva", "Lena",
                        "Sarah", "Elise", "Clara", "Noor", "Eva", "Manon", "Nina", "Julia", "Fleur", "Liv",
                        "Eline", "Lara", "Marie", "Lola", "Hannah", "Sophie", "Laura", "Elisa", "Amélie", "Alicia",
                        "Julia", "Emilie", "Mathilde", "Lore", "Céline", "Jade", "Elsa", "Marthe", "Victoria", "Jasmine",
                        "Leonie", "Pauline", "Maud", "Valentine", "Fanny", "Stéphanie", "Caroline", "Isabelle", "Christine", "Anne",
                        "Martine", "Catherine", "Brigitte", "Danielle", "Nathalie", "Sylvie", "Monique", "Marie-France", "Marie-Paule", "Patricia",
                        "Josiane", "Colette", "Liliane", "Annick", "Chantal", "Nicole", "Sophie", "Aurore", "Nathalie", "Marie-Noëlle",
                        "Sandrine", "Véronique", "Isabelle", "Anne-Sophie", "Stéphanie", "Emilie", "Delphine", "Laurence", "Mélanie", "Sabine",
                        "Cécile", "Virginie", "Amandine", "Fanny", "Jennifer", "Valérie", "Céline", "Christelle", "Nancy", "Florence"
                      ],
                    'second': [
                        "Dubois", "Janssens", "Willems", "Jacobs", "Mertens", "Martens", "Pauwels", "Lambert", "Hermans", "De Smet",
                        "Desmet", "Delvaux", "Lefevre", "Dewitte", "Lambrecht", "Goossens", "De Wilde", "Van den Berg", "Michiels", "Lefever",
                        "Vandenbergh", "Maes", "Vandenberghe", "Lacroix", "Baert", "Lemaire", "Dupont", "Dumont", "Dupuis", "Leroy",
                        "Simon", "Noel", "Dumont", "Fontaine", "Leclercq", "Lemaire", "Durant", "Van Hove", "Bakker", "Smeets",
                        "Vanderveken", "Wouters", "Peeters", "Janssen", "Vandenberg", "Vanderheyden", "Thijs", "De Cock", "Van Damme", "Dekker",
                        "Devos", "Declercq", "Vermeulen", "Vermeire", "Van Dyck", "De Backer", "Van de Velde", "Govaert", "Van Dijk", "De Boeck",
                        "Wouters", "Van Dyck", "Schmitz", "Vermeersch", "Vandewalle", "Vandecasteele", "Verheyen", "Vermeulen", "Van Dam", "Verhaeghe",
                        "De Groote", "Van Hout", "De Vries", "Wouters", "Van Den Bossche", "Van De Velde", "Willems", "Van Den Bosch", "Smet",
                        "Van Den Broeck", "Martens", "Pauwels", "Lemmens", "Bosmans", "Claes", "Van der Linden", "Van Der Heyden", "Vandenbossche", "Vanderlinden",
                        "Vandeweghe", "Verhaegen", "Verhulst", "Vermassen", "Vermeir", "Vandepitte", "Vanderpoel", "Vanderstraeten", "Vanderveeke", "Vanhercke"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Lucas", "Liam", "Noah", "Ethan", "Adam", "Finn", "Victor", "Leo", "Arthur", "Gabriel",
                        "Maxime", "Louis", "Jules", "Oscar", "Mathis", "Théo", "Tom", "Milo", "Hugo", "Axel",
                        "Felix", "Matteo", "Emile", "Nathan", "Alexander", "Arthur", "Antoine", "Samuel", "Isaac", "Olivier",
                        "Benjamin", "Elias", "Simon", "Xander", "Mathias", "Baptiste", "David", "Daniel", "Michael", "Raphael",
                        "Tristan", "Cédric", "Vincent", "Julien", "Nicolas", "Christian", "Pierre", "Adrien", "André", "Georges",
                        "Luc", "Philippe", "Jacques", "Jean", "René", "Paul", "Henri", "Alain", "Marc", "Albert",
                        "Charles", "Denis", "Claude", "François", "Guy", "Pierre", "Roger", "Robert", "Thierry", "Yves",
                        "Patrick", "Eric", "David", "Serge", "Michel", "Jean-Paul", "Franck", "Alexandre", "Sylvain", "Grégoire",
                        "Jonathan", "Thierry", "Christophe", "Pascal", "Laurent", "Bruno", "Gilles", "Dominique", "Christophe", "Didier",
                        "Xavier", "Antoine", "Geoffrey", "Sébastien", "Emmanuel", "Fabrice", "Olivier", "Vincent", "Jerome", "Cyril"
                      ],
                    'second': [
                        "Dubois", "Janssens", "Willems", "Jacobs", "Mertens", "Martens", "Pauwels", "Lambert", "Hermans", "De Smet",
                        "Desmet", "Delvaux", "Lefevre", "Dewitte", "Lambrecht", "Goossens", "De Wilde", "Van den Berg", "Michiels", "Lefever",
                        "Vandenbergh", "Maes", "Vandenberghe", "Lacroix", "Baert", "Lemaire", "Dupont", "Dumont", "Dupuis", "Leroy",
                        "Simon", "Noel", "Dumont", "Fontaine", "Leclercq", "Lemaire", "Durant", "Van Hove", "Bakker", "Smeets",
                        "Vanderveken", "Wouters", "Peeters", "Janssen", "Vandenberg", "Vanderheyden", "Thijs", "De Cock", "Van Damme", "Dekker",
                        "Devos", "Declercq", "Vermeulen", "Vermeire", "Van Dyck", "De Backer", "Van de Velde", "Govaert", "Van Dijk", "De Boeck",
                        "Wouters", "Van Dyck", "Schmitz", "Vermeersch", "Vandewalle", "Vandecasteele", "Verheyen", "Vermeulen", "Van Dam", "Verhaeghe",
                        "De Groote", "Van Hout", "De Vries", "Wouters", "Van Den Bossche", "Van De Velde", "Willems", "Van Den Bosch", "Smet",
                        "Van Den Broeck", "Martens", "Pauwels", "Lemmens", "Bosmans", "Claes", "Van der Linden", "Van Der Heyden", "Vandenbossche", "Vanderlinden",
                        "Vandeweghe", "Verhaegen", "Verhulst", "Vermassen", "Vermeir", "Vandepitte", "Vanderpoel", "Vanderstraeten", "Vanderveeke", "Vanhercke"
                      ]
                },
                'female': {
                    'first': [
                        "Emma", "Olivia", "Ava", "Mila", "Ella", "Amelia", "Alice", "Charlotte", "Lina", "Zoe",
                        "Juliette", "Louise", "Léa", "Camille", "Lily", "Anna", "Lucie", "Nora", "Eva", "Lena",
                        "Sarah", "Elise", "Clara", "Noor", "Eva", "Manon", "Nina", "Julia", "Fleur", "Liv",
                        "Eline", "Lara", "Marie", "Lola", "Hannah", "Sophie", "Laura", "Elisa", "Amélie", "Alicia",
                        "Julia", "Emilie", "Mathilde", "Lore", "Céline", "Jade", "Elsa", "Marthe", "Victoria", "Jasmine",
                        "Leonie", "Pauline", "Maud", "Valentine", "Fanny", "Stéphanie", "Caroline", "Isabelle", "Christine", "Anne",
                        "Martine", "Catherine", "Brigitte", "Danielle", "Nathalie", "Sylvie", "Monique", "Marie-France", "Marie-Paule", "Patricia",
                        "Josiane", "Colette", "Liliane", "Annick", "Chantal", "Nicole", "Sophie", "Aurore", "Nathalie", "Marie-Noëlle",
                        "Sandrine", "Véronique", "Isabelle", "Anne-Sophie", "Stéphanie", "Emilie", "Delphine", "Laurence", "Mélanie", "Sabine",
                        "Cécile", "Virginie", "Amandine", "Fanny", "Jennifer", "Valérie", "Céline", "Christelle", "Nancy", "Florence"
                      ],
                    'second': [
                        "Dubois", "Janssens", "Willems", "Jacobs", "Mertens", "Martens", "Pauwels", "Lambert", "Hermans", "De Smet",
                        "Desmet", "Delvaux", "Lefevre", "Dewitte", "Lambrecht", "Goossens", "De Wilde", "Van den Berg", "Michiels", "Lefever",
                        "Vandenbergh", "Maes", "Vandenberghe", "Lacroix", "Baert", "Lemaire", "Dupont", "Dumont", "Dupuis", "Leroy",
                        "Simon", "Noel", "Dumont", "Fontaine", "Leclercq", "Lemaire", "Durant", "Van Hove", "Bakker", "Smeets",
                        "Vanderveken", "Wouters", "Peeters", "Janssen", "Vandenberg", "Vanderheyden", "Thijs", "De Cock", "Van Damme", "Dekker",
                        "Devos", "Declercq", "Vermeulen", "Vermeire", "Van Dyck", "De Backer", "Van de Velde", "Govaert", "Van Dijk", "De Boeck",
                        "Wouters", "Van Dyck", "Schmitz", "Vermeersch", "Vandewalle", "Vandecasteele", "Verheyen", "Vermeulen", "Van Dam", "Verhaeghe",
                        "De Groote", "Van Hout", "De Vries", "Wouters", "Van Den Bossche", "Van De Velde", "Willems", "Van Den Bosch", "Smet",
                        "Van Den Broeck", "Martens", "Pauwels", "Lemmens", "Bosmans", "Claes", "Van der Linden", "Van Der Heyden", "Vandenbossche", "Vanderlinden",
                        "Vandeweghe", "Verhaegen", "Verhulst", "Vermassen", "Vermeir", "Vandepitte", "Vanderpoel", "Vanderstraeten", "Vanderveeke", "Vanhercke"
                      ],
                }
            }
        }},
    'Benin': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Adeoti", "Adjovi", "Akpakpa", "Akpata", "Akpovo", "Akpoyibo", "Akrofi", "Akudinobi", "Alika", "Amadi",
                        "Amankwa", "Anyanwu", "Apaloo", "Arhin", "Asamoah", "Ashanti", "Atieno", "Ayodele", "Babatunde", "Bamgbala",
                        "Bankole", "Bashiru", "Bello", "Chijioke", "Chinedu", "Chukwudi", "Danjuma", "Ekow", "Ekundayo", "Enitan",
                        "Ezenwa", "Folayan", "Folorunsho", "Fotso", "Gbadamosi", "Gbenro", "Ghana", "Idowu", "Ifeanyi", "Igwe",
                        "Imoh", "Irukwu", "Isong", "Jabari", "Kalu", "Kamara", "Kazeem", "Kenzo", "Kofi", "Kwame",
                        "Ladipo", "Lamine", "Mandela", "Mandume", "Mensah", "Minani", "Nkrumah", "Nnaji", "Nwachukwu", "Obanla",
                        "Okafor", "Okeke", "Okonkwo", "Olamide", "Olasunkanmi", "Olawale", "Oluwaseun", "Omondi", "Oni", "Osagie",
                        "Osayande", "Oyelowo", "Ozuluonye", "Quansah", "Rasheed", "Sadiq", "Sowande", "Tahiru", "Tanaka", "Uche",
                        "Udeagha", "Udofia", "Ugwu", "Umeh", "Usman", "Uzoigwe", "Vincent", "Wamalwa", "Wanjiru", "Yao",
                        "Yoruba", "Zuberu"
                      ],
                    'second': [
                        "Agbaje", "Akpabio", "Amoussou", "Anagbogu", "Azikiwe", "Balogun", "Dossou", "Eze", "Gnassingbé", "Ibrahim",
                        "Igboanugo", "Imasuen", "Iroegbu", "Kalu", "Kone", "Lawal", "Mensah", "Nkosi", "Nwabueze", "Obi",
                        "Ogunbanjo", "Okonkwo", "Oladipo", "Olawale", "Olowu", "Oni", "Osayande", "Oyewole", "Oyinlola", "Soglo",
                        "Tchomogo", "Ude", "Uzoma", "Wogu", "Zinsou", "Zogbo", "Abiodun", "Adeniran", "Afolayan", "Ajayi",
                        "Akinjide", "Akinola", "Akinsanya", "Akintola", "Alabi", "Amaechi", "Anyiam", "Asobie", "Atiku", "Awolowo",
                        "Babangida", "Babatunde", "Bakare", "Balogun", "Bankole", "Chukwuemeka", "Danjuma", "Dauda", "Eke", "Ekwensi",
                        "Fagbenle", "Fashola", "Fayemi", "Gbaja-Biamila", "Idris", "Igwe", "Iroegbu", "Isiaka", "Jaja", "Kalu",
                        "Kanu", "Kokori", "Ladoja", "Makinde", "Mohammed", "Nnamani", "Obasanjo", "Ogunbanjo", "Ogunlana", "Okeke",
                        "Olowookere", "Oni", "Oyedepo", "Oyinlola", "Saraki", "Shagaya", "Sofola", "Soludo", "Uzodinma", "Yakubu",
                        "Yaradua", "Yuguda", "Zaku"
                      ]
                },
                'female': {
                    'first': [
                        "Adenike", "Akunna", "Akwete", "Ayodele", "Ayomide", "Azuka", "Bolanle", "Chiamaka", "Chidimma", "Chinyere",
                        "Damisi", "Eniola", "Eshe", "Folake", "Funmilayo", "Halima", "Ifeoma", "Imani", "Jumoke", "Kadiatou",
                        "Kafui", "Kanika", "Kehinde", "Kemi", "Kubura", "Latifah", "Makeda", "Mojisola", "Ngozi", "Nia",
                        "Nkechi", "Nneka", "Ngozi", "Ogechi", "Olabisi", "Oluchi", "Omowunmi", "Oni", "Ramatoulaye", "Rukayat",
                        "Safiya", "Sekai", "Sefu", "Shanika", "Simisola", "Siyanda", "Subira", "Tanisha", "Tariro", "Temitope",
                        "Titi", "Tope", "Tsitsi", "Ufuoma", "Ugochi", "Uzoma", "Wuraola", "Yaa", "Yejide", "Yewande",
                        "Zainab", "Zalika", "Zanele", "Zawadi", "Zola", "Zuwena", "Zuri", "Adjoa", "Aissa", "Akua",
                        "Anika", "Asha", "Aziza", "Binta", "Dalia", "Fatou", "Jamila", "Kamaria", "Kaya", "Leila",
                        "Malika", "Muna", "Naima", "Nia", "Nuru", "Rahima", "Samira", "Tahira", "Zahara", "Zalika"
                      ],
                    'second': [
                        "Agbaje", "Akpabio", "Amoussou", "Anagbogu", "Azikiwe", "Balogun", "Dossou", "Eze", "Gnassingbé", "Ibrahim",
                        "Igboanugo", "Imasuen", "Iroegbu", "Kalu", "Kone", "Lawal", "Mensah", "Nkosi", "Nwabueze", "Obi",
                        "Ogunbanjo", "Okonkwo", "Oladipo", "Olawale", "Olowu", "Oni", "Osayande", "Oyewole", "Oyinlola", "Soglo",
                        "Tchomogo", "Ude", "Uzoma", "Wogu", "Zinsou", "Zogbo", "Abiodun", "Adeniran", "Afolayan", "Ajayi",
                        "Akinjide", "Akinola", "Akinsanya", "Akintola", "Alabi", "Amaechi", "Anyiam", "Asobie", "Atiku", "Awolowo",
                        "Babangida", "Babatunde", "Bakare", "Balogun", "Bankole", "Chukwuemeka", "Danjuma", "Dauda", "Eke", "Ekwensi",
                        "Fagbenle", "Fashola", "Fayemi", "Gbaja-Biamila", "Idris", "Igwe", "Iroegbu", "Isiaka", "Jaja", "Kalu",
                        "Kanu", "Kokori", "Ladoja", "Makinde", "Mohammed", "Nnamani", "Obasanjo", "Ogunbanjo", "Ogunlana", "Okeke",
                        "Olowookere", "Oni", "Oyedepo", "Oyinlola", "Saraki", "Shagaya", "Sofola", "Soludo", "Uzodinma", "Yakubu",
                        "Yaradua", "Yuguda", "Zaku"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Adeoti", "Adjovi", "Akpakpa", "Akpata", "Akpovo", "Akpoyibo", "Akrofi", "Akudinobi", "Alika", "Amadi",
                        "Amankwa", "Anyanwu", "Apaloo", "Arhin", "Asamoah", "Ashanti", "Atieno", "Ayodele", "Babatunde", "Bamgbala",
                        "Bankole", "Bashiru", "Bello", "Chijioke", "Chinedu", "Chukwudi", "Danjuma", "Ekow", "Ekundayo", "Enitan",
                        "Ezenwa", "Folayan", "Folorunsho", "Fotso", "Gbadamosi", "Gbenro", "Ghana", "Idowu", "Ifeanyi", "Igwe",
                        "Imoh", "Irukwu", "Isong", "Jabari", "Kalu", "Kamara", "Kazeem", "Kenzo", "Kofi", "Kwame",
                        "Ladipo", "Lamine", "Mandela", "Mandume", "Mensah", "Minani", "Nkrumah", "Nnaji", "Nwachukwu", "Obanla",
                        "Okafor", "Okeke", "Okonkwo", "Olamide", "Olasunkanmi", "Olawale", "Oluwaseun", "Omondi", "Oni", "Osagie",
                        "Osayande", "Oyelowo", "Ozuluonye", "Quansah", "Rasheed", "Sadiq", "Sowande", "Tahiru", "Tanaka", "Uche",
                        "Udeagha", "Udofia", "Ugwu", "Umeh", "Usman", "Uzoigwe", "Vincent", "Wamalwa", "Wanjiru", "Yao",
                        "Yoruba", "Zuberu"
                      ],
                    'second': [
                        "Agbaje", "Akpabio", "Amoussou", "Anagbogu", "Azikiwe", "Balogun", "Dossou", "Eze", "Gnassingbé", "Ibrahim",
                        "Igboanugo", "Imasuen", "Iroegbu", "Kalu", "Kone", "Lawal", "Mensah", "Nkosi", "Nwabueze", "Obi",
                        "Ogunbanjo", "Okonkwo", "Oladipo", "Olawale", "Olowu", "Oni", "Osayande", "Oyewole", "Oyinlola", "Soglo",
                        "Tchomogo", "Ude", "Uzoma", "Wogu", "Zinsou", "Zogbo", "Abiodun", "Adeniran", "Afolayan", "Ajayi",
                        "Akinjide", "Akinola", "Akinsanya", "Akintola", "Alabi", "Amaechi", "Anyiam", "Asobie", "Atiku", "Awolowo",
                        "Babangida", "Babatunde", "Bakare", "Balogun", "Bankole", "Chukwuemeka", "Danjuma", "Dauda", "Eke", "Ekwensi",
                        "Fagbenle", "Fashola", "Fayemi", "Gbaja-Biamila", "Idris", "Igwe", "Iroegbu", "Isiaka", "Jaja", "Kalu",
                        "Kanu", "Kokori", "Ladoja", "Makinde", "Mohammed", "Nnamani", "Obasanjo", "Ogunbanjo", "Ogunlana", "Okeke",
                        "Olowookere", "Oni", "Oyedepo", "Oyinlola", "Saraki", "Shagaya", "Sofola", "Soludo", "Uzodinma", "Yakubu",
                        "Yaradua", "Yuguda", "Zaku"
                      ]
                },
                'female': {
                    'first': [
                        "Adenike", "Akunna", "Akwete", "Ayodele", "Ayomide", "Azuka", "Bolanle", "Chiamaka", "Chidimma", "Chinyere",
                        "Damisi", "Eniola", "Eshe", "Folake", "Funmilayo", "Halima", "Ifeoma", "Imani", "Jumoke", "Kadiatou",
                        "Kafui", "Kanika", "Kehinde", "Kemi", "Kubura", "Latifah", "Makeda", "Mojisola", "Ngozi", "Nia",
                        "Nkechi", "Nneka", "Ngozi", "Ogechi", "Olabisi", "Oluchi", "Omowunmi", "Oni", "Ramatoulaye", "Rukayat",
                        "Safiya", "Sekai", "Sefu", "Shanika", "Simisola", "Siyanda", "Subira", "Tanisha", "Tariro", "Temitope",
                        "Titi", "Tope", "Tsitsi", "Ufuoma", "Ugochi", "Uzoma", "Wuraola", "Yaa", "Yejide", "Yewande",
                        "Zainab", "Zalika", "Zanele", "Zawadi", "Zola", "Zuwena", "Zuri", "Adjoa", "Aissa", "Akua",
                        "Anika", "Asha", "Aziza", "Binta", "Dalia", "Fatou", "Jamila", "Kamaria", "Kaya", "Leila",
                        "Malika", "Muna", "Naima", "Nia", "Nuru", "Rahima", "Samira", "Tahira", "Zahara", "Zalika"
                      ],
                    'second': [
                        "Agbaje", "Akpabio", "Amoussou", "Anagbogu", "Azikiwe", "Balogun", "Dossou", "Eze", "Gnassingbé", "Ibrahim",
                        "Igboanugo", "Imasuen", "Iroegbu", "Kalu", "Kone", "Lawal", "Mensah", "Nkosi", "Nwabueze", "Obi",
                        "Ogunbanjo", "Okonkwo", "Oladipo", "Olawale", "Olowu", "Oni", "Osayande", "Oyewole", "Oyinlola", "Soglo",
                        "Tchomogo", "Ude", "Uzoma", "Wogu", "Zinsou", "Zogbo", "Abiodun", "Adeniran", "Afolayan", "Ajayi",
                        "Akinjide", "Akinola", "Akinsanya", "Akintola", "Alabi", "Amaechi", "Anyiam", "Asobie", "Atiku", "Awolowo",
                        "Babangida", "Babatunde", "Bakare", "Balogun", "Bankole", "Chukwuemeka", "Danjuma", "Dauda", "Eke", "Ekwensi",
                        "Fagbenle", "Fashola", "Fayemi", "Gbaja-Biamila", "Idris", "Igwe", "Iroegbu", "Isiaka", "Jaja", "Kalu",
                        "Kanu", "Kokori", "Ladoja", "Makinde", "Mohammed", "Nnamani", "Obasanjo", "Ogunbanjo", "Ogunlana", "Okeke",
                        "Olowookere", "Oni", "Oyedepo", "Oyinlola", "Saraki", "Shagaya", "Sofola", "Soludo", "Uzodinma", "Yakubu",
                        "Yaradua", "Yuguda", "Zaku"
                      ],
                }
            }
        }},
    'Bulgaria': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Ivan", "Georgi", "Dimitar", "Nikolay", "Petar", "Stoyan", "Dragan", "Krasimir", "Rumen", "Ivo",
                        "Yordan", "Hristo", "Boyan", "Valentin", "Vladimir", "Borislav", "Lyubomir", "Svetoslav", "Yanko", "Veselin",
                        "Kiril", "Asen", "Atanas", "Todor", "Kamen", "Ilian", "Kaloyan", "Yavor", "Danko", "Slavi",
                        "Dobromir", "Blagoi", "Zdravko", "Radoslav", "Deyan", "Emil", "Stefan", "Evgeni", "Mitko", "Vasil",
                        "Plamen", "Nedyalko", "Bogdan", "Zhivko", "Krum", "Milen", "Nikola", "Bozhidar", "Zlatko", "Veliko",
                        "Branimir", "Yasen", "Anton", "Valeri", "Dicho", "Grigor", "Hristofor", "Yanko", "Zahari", "Ismet",
                        "Lachezar", "Marian", "Nikifor", "Ognian", "Pencho", "Rostislav", "Spas", "Teodosi", "Ustinya", "Venko",
                        "Yanislav", "Zlatan", "Bozhidar", "Lyuben", "Milcho", "Nedko", "Orlin", "Ruslan", "Simeon", "Trifon",
                        "Hristofor", "Valentin", "Yavor", "Zhivko", "Zlatko", "Bozhidar", "Kamen", "Ilian", "Kaloyan", "Yordan",
                        "Todor", "Stefan", "Evgeni", "Lyubomir", "Svetoslav", "Asen", "Atanas", "Ivan", "Georgi", "Dimitar"
                      ],
                    'second': [
                        "Ivanov", "Georgiev", "Dimitrov", "Petrov", "Nikolov", "Vasilev", "Stoyanov", "Todorov", "Kostov", "Angelov",
                        "Hristov", "Iliev", "Kolev", "Yankov", "Pavlov", "Mihaylov", "Grigorov", "Dinev", "Zlatev", "Yordanov",
                        "Bogdanov", "Stefanov", "Kirov", "Dimitrov", "Tanev", "Vladimirov", "Krasov"
                      ]
                },
                'female': {
                    'first': [
                        "Maria", "Iva", "Nina", "Elena", "Kristina", "Viktoria", "Anastasia", "Sofia", "Stefaniya", "Katerina",
                        "Margarita", "Raya", "Vesela", "Ivelina", "Mihaela", "Lilia", "Rositsa", "Nadezhda", "Denitsa", "Ekaterina",
                        "Teodora", "Elitsa", "Gergana", "Kalina", "Antoaneta", "Silviya", "Radostina", "Emiliya", "Vanya", "Bilyana",
                        "Diana", "Ralitsa", "Adelina", "Lyubov", "Zornitsa", "Zlatina", "Yoana", "Valentina", "Desislava", "Simona",
                        "Dimitrina", "Nikoleta", "Petia", "Rumyana", "Veronika", "Dara", "Veronica", "Svetlana", "Neli", "Stela",
                        "Aneliya", "Boriana", "Darina", "Elica", "Yuliana", "Ivona", "Rada", "Ivelin", "Vasilena", "Yosifina",
                        "Tatiana", "Rozalina", "Zvetelina", "Stoyanka", "Lyuba", "Tanya", "Evgeniya", "Reneta", "Ani", "Irina",
                        "Ginka", "Ralitsa", "Reneta", "Krasimira", "Iskra", "Ivanka", "Yana", "Lora", "Marta", "Natalia",
                        "Olya", "Sonya", "Tsvetana", "Tanya", "Valeriya", "Yordanka", "Zarina", "Desislava", "Elena", "Kalina",
                        "Ivanka", "Lyudmila", "Mariya", "Nadezhda", "Ralitsa", "Silviya", "Yordanka", "Zoya", "Galya", "Iva"
                      ],
                    'second': [
                        "Ivanova", "Georgieva", "Dimitrova", "Petrova", "Nikolova", "Vasileva", "Stoyanova", "Todorova", "Kostova", "Angelova",
                        "Hristova", "Ilieva", "Koleva", "Yankova", "Pavlova", "Mihaylova", "Grigorova", "Dineva", "Zlateva", "Yordanova",
                        "Bogdanova", "Stefanova", "Kirova", "Mladenova", "Taneva", "Vladimirova", "Krasava"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Ivan", "Georgi", "Dimitar", "Nikolay", "Petar", "Stoyan", "Dragan", "Krasimir", "Rumen", "Ivo",
                        "Yordan", "Hristo", "Boyan", "Valentin", "Vladimir", "Borislav", "Lyubomir", "Svetoslav", "Yanko", "Veselin",
                        "Kiril", "Asen", "Atanas", "Todor", "Kamen", "Ilian", "Kaloyan", "Yavor", "Danko", "Slavi",
                        "Dobromir", "Blagoi", "Zdravko", "Radoslav", "Deyan", "Emil", "Stefan", "Evgeni", "Mitko", "Vasil",
                        "Plamen", "Nedyalko", "Bogdan", "Zhivko", "Krum", "Milen", "Nikola", "Bozhidar", "Zlatko", "Veliko",
                        "Branimir", "Yasen", "Anton", "Valeri", "Dicho", "Grigor", "Hristofor", "Yanko", "Zahari", "Ismet",
                        "Lachezar", "Marian", "Nikifor", "Ognian", "Pencho", "Rostislav", "Spas", "Teodosi", "Ustinya", "Venko",
                        "Yanislav", "Zlatan", "Bozhidar", "Lyuben", "Milcho", "Nedko", "Orlin", "Ruslan", "Simeon", "Trifon",
                        "Hristofor", "Valentin", "Yavor", "Zhivko", "Zlatko", "Bozhidar", "Kamen", "Ilian", "Kaloyan", "Yordan",
                        "Todor", "Stefan", "Evgeni", "Lyubomir", "Svetoslav", "Asen", "Atanas", "Ivan", "Georgi", "Dimitar"
                      ],
                    'second': [
                        "Ivanov", "Georgiev", "Dimitrov", "Petrov", "Nikolov", "Vasilev", "Stoyanov", "Todorov", "Kostov", "Angelov",
                        "Hristov", "Iliev", "Kolev", "Yankov", "Pavlov", "Mihaylov", "Grigorov", "Dinev", "Zlatev", "Yordanov",
                        "Bogdanov", "Stefanov", "Kirov", "Dimitrov", "Tanev", "Vladimirov", "Krasov"
                      ]
                },
                'female': {
                    'first': [
                        "Maria", "Iva", "Nina", "Elena", "Kristina", "Viktoria", "Anastasia", "Sofia", "Stefaniya", "Katerina",
                        "Margarita", "Raya", "Vesela", "Ivelina", "Mihaela", "Lilia", "Rositsa", "Nadezhda", "Denitsa", "Ekaterina",
                        "Teodora", "Elitsa", "Gergana", "Kalina", "Antoaneta", "Silviya", "Radostina", "Emiliya", "Vanya", "Bilyana",
                        "Diana", "Ralitsa", "Adelina", "Lyubov", "Zornitsa", "Zlatina", "Yoana", "Valentina", "Desislava", "Simona",
                        "Dimitrina", "Nikoleta", "Petia", "Rumyana", "Veronika", "Dara", "Veronica", "Svetlana", "Neli", "Stela",
                        "Aneliya", "Boriana", "Darina", "Elica", "Yuliana", "Ivona", "Rada", "Ivelin", "Vasilena", "Yosifina",
                        "Tatiana", "Rozalina", "Zvetelina", "Stoyanka", "Lyuba", "Tanya", "Evgeniya", "Reneta", "Ani", "Irina",
                        "Ginka", "Ralitsa", "Reneta", "Krasimira", "Iskra", "Ivanka", "Yana", "Lora", "Marta", "Natalia",
                        "Olya", "Sonya", "Tsvetana", "Tanya", "Valeriya", "Yordanka", "Zarina", "Desislava", "Elena", "Kalina",
                        "Ivanka", "Lyudmila", "Mariya", "Nadezhda", "Ralitsa", "Silviya", "Yordanka", "Zoya", "Galya", "Iva"
                      ],
                    'second': [
                        "Ivanova", "Georgieva", "Dimitrova", "Petrova", "Nikolova", "Vasileva", "Stoyanova", "Todorova", "Kostova", "Angelova",
                        "Hristova", "Ilieva", "Koleva", "Yankova", "Pavlova", "Mihaylova", "Grigorova", "Dineva", "Zlateva", "Yordanova",
                        "Bogdanova", "Stefanova", "Kirova", "Mladenova", "Taneva", "Vladimirova", "Krasava"
                      ],
                }
            }
        }},
    'Bosnia and Herzegovina': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Adnan", "Mirza", "Emir", "Dino", "Haris", "Emin", "Armin", "Elvir", "Faruk", "Amar",
                        "Alem", "Safet", "Tarik", "Sanel", "Aldin", "Damir", "Edin", "Enis", "Nermin", "Mirsad",
                        "Almir", "Selmir", "Denis", "Edis", "Aid", "Semir", "Elvis", "Senad", "Elvedin", "Eldin",
                        "Arnes", "Ermin", "Nino", "Adis", "Mirnes", "Emir", "Haris", "Ervin", "Alen", "Anel",
                        "Muhamed", "Ajdin", "Azur", "Davor", "Said", "Suljo", "Zijad", "Sead", "Rijad", "Kenan",
                        "Benjamin", "Fahrudin", "Admir", "Tarik", "Adel", "Ahmed", "Husein", "Ismar", "Riad", "Samed",
                        "Alen", "Din", "Asim", "Hamza", "Emrah", "Vedad", "Elvir", "Fikret", "Ernad", "Esad",
                        "Harun", "Indir", "Mensur", "Nihad", "Salko", "Sandro", "Semih", "Slobodan", "Vedran", "Vlado",
                        "Zoran", "Zlatan", "Almir", "Din", "Eldar", "Emin", "Esmir", "Fahrudin", "Faris", "Fikret",
                        "Goran", "Husnija", "Ibrahim", "Igor", "Jasmin", "Jasenko", "Jovan", "Luka", "Marko", "Mehmed"
                      ],
                    'second': [
                        "Hodzic", "Hadzic", "Osmanagic", "Suljic", "Kovacevic", "Ibrahimovic", "Karic", "Mehic", "Osmic", "Delic",
                        "Kurtic", "Smajic", "Brkic", "Mandic", "Salkic", "Mujagic", "Ahmetovic", "Alagic", "Makic", "Aljic",
                        "Huskic", "Muharemovic", "Dautovic", "Mujic", "Dervisevic", "Besic", "Mesic", "Hrnjic", "Sarajlic", "Secerovic",
                        "Cosic", "Kadric", "Agic", "Mujkic", "Husic", "Krehic", "Ramic", "Jusic", "Lukic", "Halilovic",
                        "Ibrulj", "Zukic", "Dizdarevic", "Pandza", "Ihtijarevic", "Omeragic", "Sijercic", "Ljevakovic", "Mahmic", "Kamberovic",
                        "Lemes", "Geko", "Kolic", "Selimovic", "Corovic", "Merdanovic", "Hasecic", "Izetbegovic", "Zahiragic", "Jugo",
                        "Herceg", "Zaimovic", "Dugonjic", "Grbic", "Peco", "Dolic", "Karamehmedovic", "Lisica", "Feric", "Jusufbegovic",
                        "Osmanovic", "Sabic", "Husic", "Music", "Dautbegovic", "Palic", "Ahmic", "Selmanovic", "Serdarevic", "Dudic",
                        "Semic", "Suljagic", "Matoruga", "Polic", "Mustafic", "Sisic", "Zelenika", "Isakovic", "Bajramovic", "Tiro"
                      ]
                },
                'female': {
                    'first': [
                        "Amina", "Lejla", "Amila", "Emina", "Maida", "Aida", "Ajla", "Selma", "Dženita", "Merima",
                        "Naida", "Ajsa", "Adna", "Belma", "Dina", "Ela", "Elma", "Emira", "Ena", "Erna",
                        "Lamija", "Lana", "Larisa", "Lejla", "Maja", "Medina", "Melisa", "Mia", "Milena", "Minela",
                        "Nedžla", "Nela", "Nejla", "Selena", "Selma", "Sumeja", "Tea", "Tijana", "Una", "Vildana",
                        "Zara", "Zerina", "Zlata", "Šejla", "Šima", "Emina", "Ajša", "Amina", "Amra", "Belkisa",
                        "Dara", "Dijana", "Dina", "Edina", "Ejla", "Elma", "Ena", "Erna", "Fatima", "Ferida",
                        "Gordana", "Hana", "Harisa", "Hasiba", "Ina", "Jasmina", "Katrina", "Kerima", "Lamija", "Lejla",
                        "Lela", "Ljiljana", "Maida", "Maja", "Medina", "Melisa", "Mia", "Naida", "Nejla", "Nela",
                        "Sanela", "Sejla", "Selma", "Sumeja", "Šejla", "Tara", "Tea", "Una", "Vildana", "Zara",
                        "Zerina", "Zlata"
                      ],
                    'second': [
                        "Hodzic", "Hadzic", "Osmanagic", "Suljic", "Kovacevic", "Ibrahimovic", "Karic", "Mehic", "Osmic", "Delic",
                        "Kurtic", "Smajic", "Brkic", "Mandic", "Salkic", "Mujagic", "Ahmetovic", "Alagic", "Makic", "Aljic",
                        "Huskic", "Muharemovic", "Dautovic", "Mujic", "Dervisevic", "Besic", "Mesic", "Hrnjic", "Sarajlic", "Secerovic",
                        "Cosic", "Kadric", "Agic", "Mujkic", "Husic", "Krehic", "Ramic", "Jusic", "Lukic", "Halilovic",
                        "Ibrulj", "Zukic", "Dizdarevic", "Pandza", "Ihtijarevic", "Omeragic", "Sijercic", "Ljevakovic", "Mahmic", "Kamberovic",
                        "Lemes", "Geko", "Kolic", "Selimovic", "Corovic", "Merdanovic", "Hasecic", "Izetbegovic", "Zahiragic", "Jugo",
                        "Herceg", "Zaimovic", "Dugonjic", "Grbic", "Peco", "Dolic", "Karamehmedovic", "Lisica", "Feric", "Jusufbegovic",
                        "Osmanovic", "Sabic", "Husic", "Music", "Dautbegovic", "Palic", "Ahmic", "Selmanovic", "Serdarevic", "Dudic",
                        "Semic", "Suljagic", "Matoruga", "Polic", "Mustafic", "Sisic", "Zelenika", "Isakovic", "Bajramovic", "Tiro"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Adnan", "Mirza", "Emir", "Dino", "Haris", "Emin", "Armin", "Elvir", "Faruk", "Amar",
                        "Alem", "Safet", "Tarik", "Sanel", "Aldin", "Damir", "Edin", "Enis", "Nermin", "Mirsad",
                        "Almir", "Selmir", "Denis", "Edis", "Aid", "Semir", "Elvis", "Senad", "Elvedin", "Eldin",
                        "Arnes", "Ermin", "Nino", "Adis", "Mirnes", "Emir", "Haris", "Ervin", "Alen", "Anel",
                        "Muhamed", "Ajdin", "Azur", "Davor", "Said", "Suljo", "Zijad", "Sead", "Rijad", "Kenan",
                        "Benjamin", "Fahrudin", "Admir", "Tarik", "Adel", "Ahmed", "Husein", "Ismar", "Riad", "Samed",
                        "Alen", "Din", "Asim", "Hamza", "Emrah", "Vedad", "Elvir", "Fikret", "Ernad", "Esad",
                        "Harun", "Indir", "Mensur", "Nihad", "Salko", "Sandro", "Semih", "Slobodan", "Vedran", "Vlado",
                        "Zoran", "Zlatan", "Almir", "Din", "Eldar", "Emin", "Esmir", "Fahrudin", "Faris", "Fikret",
                        "Goran", "Husnija", "Ibrahim", "Igor", "Jasmin", "Jasenko", "Jovan", "Luka", "Marko", "Mehmed"
                      ],
                    'second': [
                        "Hodžić", "Hadžić", "Osmanagić", "Suljić", "Kovačević", "Ibrahimović", "Karić", "Mehić", "Osmić", "Delić",
                        "Kurtić", "Smajić", "Brkić", "Mandić", "Salkić", "Mujagić", "Ahmetović", "Alagić", "Makić", "Aljić",
                        "Huskić", "Muharemović", "Dautović", "Mujić", "Dervišević", "Bešić", "Mešić", "Hrnjić", "Sarajlić", "Šećerović",
                        "Ćosić", "Kadrić", "Agić", "Mujkić", "Husić", "Krehić", "Ramić", "Jusić", "Lukić", "Halilović",
                        "Ibrulj", "Zukić", "Dizdarević", "Pandža", "Ihtijarević", "Omeragić", "Sijerčić", "Ljevaković", "Mahmić", "Kamberović",
                        "Lemes", "Geko", "Kolić", "Selimović", "Ćorović", "Merdanović", "Hasečić", "Izetbegović", "Zahiragić", "Jugo",
                        "Herceg", "Zaimović", "Dugonjić", "Grbić", "Peco", "Dolić", "Karamehmedović", "Lisica", "Ferić", "Jusufbegović",
                        "Osmanović", "Šabić", "Husić", "Musić", "Dautbegović", "Palić", "Ahmić", "Selmanović", "Serdarević", "Dudić",
                        "Šemić", "Suljagić", "Matoruga", "Polić", "Mustafić", "Šišić", "Zelenika", "Isaković", "Bajramović", "Tiro"
                      ]
                },
                'female': {
                    'first': [
                        "Amina", "Lejla", "Amila", "Emina", "Maida", "Aida", "Ajla", "Selma", "Dženita", "Merima",
                        "Naida", "Ajsa", "Adna", "Belma", "Dina", "Ela", "Elma", "Emira", "Ena", "Erna",
                        "Lamija", "Lana", "Larisa", "Lejla", "Maja", "Medina", "Melisa", "Mia", "Milena", "Minela",
                        "Nedžla", "Nela", "Nejla", "Selena", "Selma", "Sumeja", "Tea", "Tijana", "Una", "Vildana",
                        "Zara", "Zerina", "Zlata", "Šejla", "Šima", "Emina", "Ajša", "Amina", "Amra", "Belkisa",
                        "Dara", "Dijana", "Dina", "Edina", "Ejla", "Elma", "Ena", "Erna", "Fatima", "Ferida",
                        "Gordana", "Hana", "Harisa", "Hasiba", "Ina", "Jasmina", "Katrina", "Kerima", "Lamija", "Lejla",
                        "Lela", "Ljiljana", "Maida", "Maja", "Medina", "Melisa", "Mia", "Naida", "Nejla", "Nela",
                        "Sanela", "Sejla", "Selma", "Sumeja", "Šejla", "Tara", "Tea", "Una", "Vildana", "Zara",
                        "Zerina", "Zlata"
                      ],
                    'second': [
                        "Hodžić", "Hadžić", "Osmanagić", "Suljić", "Kovačević", "Ibrahimović", "Karić", "Mehić", "Osmić", "Delić",
                        "Kurtić", "Smajić", "Brkić", "Mandić", "Salkić", "Mujagić", "Ahmetović", "Alagić", "Makić", "Aljić",
                        "Huskić", "Muharemović", "Dautović", "Mujić", "Dervišević", "Bešić", "Mešić", "Hrnjić", "Sarajlić", "Šećerović",
                        "Ćosić", "Kadrić", "Agić", "Mujkić", "Husić", "Krehić", "Ramić", "Jusić", "Lukić", "Halilović",
                        "Ibrulj", "Zukić", "Dizdarević", "Pandža", "Ihtijarević", "Omeragić", "Sijerčić", "Ljevaković", "Mahmić", "Kamberović",
                        "Lemes", "Geko", "Kolić", "Selimović", "Ćorović", "Merdanović", "Hasečić", "Izetbegović", "Zahiragić", "Jugo",
                        "Herceg", "Zaimović", "Dugonjić", "Grbić", "Peco", "Dolić", "Karamehmedović", "Lisica", "Ferić", "Jusufbegović",
                        "Osmanović", "Šabić", "Husić", "Musić", "Dautbegović", "Palić", "Ahmić", "Selmanović", "Serdarević", "Dudić",
                        "Šemić", "Suljagić", "Matoruga", "Polić", "Mustafić", "Šišić", "Zelenika", "Isaković", "Bajramović", "Tiro"
                      ],
                }
            }
        }},
    'Great Britain': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "William", "Jack", "Oliver", "Harry", "George", "Charlie", "Henry", "Thomas", "Oscar", "Alfie",
                        "Archie", "Max", "Leo", "Joshua", "Freddie", "Ethan", "James", "Alexander", "Logan", "Joseph",
                        "Mason", "Daniel", "Lucas", "Isaac", "Samuel", "Benjamin", "Finley", "Jacob", "Edward", "Harrison",
                        "Matthew", "Arthur", "Sebastian", "Theodore", "Dylan", "Elliot", "Ollie", "Riley", "Elijah", "David",
                        "Toby", "Jaxon", "Hugo", "Luca", "Jenson", "Stanley", "Michael", "Jude", "Albert", "Frankie",
                        "Harvey", "Ezra", "Teddy", "Reuben", "Reggie", "Tommy", "Finn", "Caleb", "Louie", "Gabriel",
                        "Jesse", "Jasper", "Harley", "Frank", "Ronnie", "Bobby", "Rory", "Louis", "Albert", "Stanley",
                        "Joe", "Billy", "Felix", "Bertie", "Chester", "Herbert", "Lenny", "Sidney", "Rex", "Monty",
                        "Albie", "Arlo", "Rufus", "Wilfred", "Walter", "Sid", "Ernie", "Gus", "Vinnie", "Rocco"
                      ],
                    'second': [
                        "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Evans", "Patel", "Wilson", "Johnson",
                        "Singh", "Wright", "Patel", "Shah", "Thomas", "Roberts", "Khan", "Lewis", "Jackson", "Clarke",
                        "James", "Phillips", "Lee", "Ali", "Harrison", "Walker", "Allen", "Hall", "Green", "Young",
                        "King", "Baker", "Turner", "Hill", "Cooper", "Bennett", "Cox", "Ellis", "Dixon", "Ward",
                        "Moore", "Harvey", "Reid", "Wood", "Murphy", "Hunt", "Palmer", "Mills", "Fox", "Rogers",
                        "Gray", "Scott", "Adams", "Patel", "Lloyd", "Bryant", "Gordon", "Murray", "Owen", "Harper",
                        "Russell", "Perry", "Mason", "Lambert", "Andrews", "Scott", "Fletcher", "Lawrence", "Stone", "Watson",
                        "Andrews", "Day", "Knight", "Burns", "Walters", "Pearson", "Bishop", "Richards", "Rose", "Ross",
                        "Morrison", "Jacobs", "Elliot", "Warren", "Fisher", "Gibson", "Marshall", "Kennedy", "Crawford", "Cook"
                      ]
                },
                'female': {
                    'first': [
                        "Olivia", "Amelia", "Isla", "Ava", "Grace", "Mia", "Ella", "Sophia", "Lily", "Freya",
                        "Ivy", "Evie", "Emily", "Elsie", "Scarlett", "Poppy", "Charlotte", "Daisy", "Alice", "Isabella",
                        "Ruby", "Harper", "Matilda", "Willow", "Esme", "Sienna", "Millie", "Chloe", "Florence", "Eva",
                        "Eleanor", "Sofia", "Maisie", "Luna", "Lucy", "Rosie", "Emma", "Ellie", "Zara", "Penelope",
                        "Aria", "Holly", "Hannah", "Lola", "Abigail", "Layla", "Maya", "Aurora", "Amelie", "Bella",
                        "Georgia", "Gracie", "Zoe", "Jessica", "Lottie", "Molly", "Harriet", "Ayla", "Emilia", "Erin",
                        "Phoebe", "Darcie", "Nancy", "Imogen", "Mila", "Thea", "Clara", "Arabella", "Violet", "Aisha",
                        "Summer", "Amber", "Edith", "Nina", "Eliza", "Maddison", "Esmae", "Beatrice", "Martha", "Lara",
                        "Athena", "Faye", "Evelyn", "Anna", "Stella", "Ava", "Layla", "Eva", "Mia", "Isabella"
                      ],
                    'second': [
                        "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Evans", "Patel", "Wilson", "Johnson",
                        "Singh", "Wright", "Patel", "Shah", "Thomas", "Roberts", "Khan", "Lewis", "Jackson", "Clarke",
                        "James", "Phillips", "Lee", "Ali", "Harrison", "Walker", "Allen", "Hall", "Green", "Young",
                        "King", "Baker", "Turner", "Hill", "Cooper", "Bennett", "Cox", "Ellis", "Dixon", "Ward",
                        "Moore", "Harvey", "Reid", "Wood", "Murphy", "Hunt", "Palmer", "Mills", "Fox", "Rogers",
                        "Gray", "Scott", "Adams", "Patel", "Lloyd", "Bryant", "Gordon", "Murray", "Owen", "Harper",
                        "Russell", "Perry", "Mason", "Lambert", "Andrews", "Scott", "Fletcher", "Lawrence", "Stone", "Watson",
                        "Andrews", "Day", "Knight", "Burns", "Walters", "Pearson", "Bishop", "Richards", "Rose", "Ross",
                        "Morrison", "Jacobs", "Elliot", "Warren", "Fisher", "Gibson", "Marshall", "Kennedy", "Crawford", "Cook"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "William", "Jack", "Oliver", "Harry", "George", "Charlie", "Henry", "Thomas", "Oscar", "Alfie",
                        "Archie", "Max", "Leo", "Joshua", "Freddie", "Ethan", "James", "Alexander", "Logan", "Joseph",
                        "Mason", "Daniel", "Lucas", "Isaac", "Samuel", "Benjamin", "Finley", "Jacob", "Edward", "Harrison",
                        "Matthew", "Arthur", "Sebastian", "Theodore", "Dylan", "Elliot", "Ollie", "Riley", "Elijah", "David",
                        "Toby", "Jaxon", "Hugo", "Luca", "Jenson", "Stanley", "Michael", "Jude", "Albert", "Frankie",
                        "Harvey", "Ezra", "Teddy", "Reuben", "Reggie", "Tommy", "Finn", "Caleb", "Louie", "Gabriel",
                        "Jesse", "Jasper", "Harley", "Frank", "Ronnie", "Bobby", "Rory", "Louis", "Albert", "Stanley",
                        "Joe", "Billy", "Felix", "Bertie", "Chester", "Herbert", "Lenny", "Sidney", "Rex", "Monty",
                        "Albie", "Arlo", "Rufus", "Wilfred", "Walter", "Sid", "Ernie", "Gus", "Vinnie", "Rocco"
                      ],
                    'second': [
                        "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Evans", "Patel", "Wilson", "Johnson",
                        "Singh", "Wright", "Patel", "Shah", "Thomas", "Roberts", "Khan", "Lewis", "Jackson", "Clarke",
                        "James", "Phillips", "Lee", "Ali", "Harrison", "Walker", "Allen", "Hall", "Green", "Young",
                        "King", "Baker", "Turner", "Hill", "Cooper", "Bennett", "Cox", "Ellis", "Dixon", "Ward",
                        "Moore", "Harvey", "Reid", "Wood", "Murphy", "Hunt", "Palmer", "Mills", "Fox", "Rogers",
                        "Gray", "Scott", "Adams", "Patel", "Lloyd", "Bryant", "Gordon", "Murray", "Owen", "Harper",
                        "Russell", "Perry", "Mason", "Lambert", "Andrews", "Scott", "Fletcher", "Lawrence", "Stone", "Watson",
                        "Andrews", "Day", "Knight", "Burns", "Walters", "Pearson", "Bishop", "Richards", "Rose", "Ross",
                        "Morrison", "Jacobs", "Elliot", "Warren", "Fisher", "Gibson", "Marshall", "Kennedy", "Crawford", "Cook"
                      ]
                },
                'female': {
                    'first': [
                        "Olivia", "Amelia", "Isla", "Ava", "Grace", "Mia", "Ella", "Sophia", "Lily", "Freya",
                        "Ivy", "Evie", "Emily", "Elsie", "Scarlett", "Poppy", "Charlotte", "Daisy", "Alice", "Isabella",
                        "Ruby", "Harper", "Matilda", "Willow", "Esme", "Sienna", "Millie", "Chloe", "Florence", "Eva",
                        "Eleanor", "Sofia", "Maisie", "Luna", "Lucy", "Rosie", "Emma", "Ellie", "Zara", "Penelope",
                        "Aria", "Holly", "Hannah", "Lola", "Abigail", "Layla", "Maya", "Aurora", "Amelie", "Bella",
                        "Georgia", "Gracie", "Zoe", "Jessica", "Lottie", "Molly", "Harriet", "Ayla", "Emilia", "Erin",
                        "Phoebe", "Darcie", "Nancy", "Imogen", "Mila", "Thea", "Clara", "Arabella", "Violet", "Aisha",
                        "Summer", "Amber", "Edith", "Nina", "Eliza", "Maddison", "Esmae", "Beatrice", "Martha", "Lara",
                        "Athena", "Faye", "Evelyn", "Anna", "Stella", "Ava", "Layla", "Eva", "Mia", "Isabella"
                      ],
                    'second': [
                        "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Evans", "Patel", "Wilson", "Johnson",
                        "Singh", "Wright", "Patel", "Shah", "Thomas", "Roberts", "Khan", "Lewis", "Jackson", "Clarke",
                        "James", "Phillips", "Lee", "Ali", "Harrison", "Walker", "Allen", "Hall", "Green", "Young",
                        "King", "Baker", "Turner", "Hill", "Cooper", "Bennett", "Cox", "Ellis", "Dixon", "Ward",
                        "Moore", "Harvey", "Reid", "Wood", "Murphy", "Hunt", "Palmer", "Mills", "Fox", "Rogers",
                        "Gray", "Scott", "Adams", "Patel", "Lloyd", "Bryant", "Gordon", "Murray", "Owen", "Harper",
                        "Russell", "Perry", "Mason", "Lambert", "Andrews", "Scott", "Fletcher", "Lawrence", "Stone", "Watson",
                        "Andrews", "Day", "Knight", "Burns", "Walters", "Pearson", "Bishop", "Richards", "Rose", "Ross",
                        "Morrison", "Jacobs", "Elliot", "Warren", "Fisher", "Gibson", "Marshall", "Kennedy", "Crawford", "Cook"
                      ],
                }
            }
        }},
    'Hungary': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Gabor", "Istvan", "Janos", "Laszlo", "Peter", "Zoltan", "Attila", "Tamas", "Ferenc", "Istvan",
                        "Andras", "Jozsef", "Imre", "Sandor", "Zsolt", "Bela", "Gyorgy", "Mihaly", "Norbert", "Karoly",
                        "Robert", "Gyula", "Csaba", "Krisztian", "Ferenc", "Mate", "Laszlo", "Szabolcs", "Viktor", "Balazs",
                        "David", "Jozsef", "Karoly", "Andras", "Miklos", "Levente", "Janos", "Zoltan", "Gabor", "Peter",
                        "Laszlo", "Ferenc", "Istvan", "Tamas", "Imre", "Sandor", "Norbert", "Zsolt", "Gyorgy", "Mihaly",
                        "Robert", "Gyula", "Csaba", "Krisztian", "Mate", "Laszlo", "Szabolcs", "Viktor", "Balazs", "David",
                        "Jozsef", "Karoly", "Andras", "Miklos", "Levente", "Janos", "Zoltan", "Gabor", "Peter", "Laszlo",
                        "Ferenc", "Istvan", "Tamas", "Imre", "Sandor", "Norbert", "Zsolt", "Gyorgy", "Mihaly", "Robert",
                        "Gyula", "Csaba", "Krisztian", "Ferenc", "Mate", "Laszlo", "Szabolcs", "Viktor", "Balazs", "David"
                      ],
                    'second': [
                        "Nagy", "Kovacs", "Toth", "Szabo", "Horvath", "Varga", "Kiss", "Molnar", "Nemeth", "Farkas",
                        "Papp", "Balazs", "Takacs", "Juhasz", "Simon", "Kalman", "Biro", "Feher", "Lakatos", "Pasztor",
                        "Pataki", "Torok", "Kis", "Magyar", "Sandor", "Feher", "Lukacs", "Szőke", "Racz", "Katona",
                        "Fekete", "Bakos", "Virag", "Janos", "Bakos", "Balogh", "Barta", "Biro", "Feher", "Gaspar",
                        "Balint", "Barna", "Beke", "Benedek", "Berces", "Bodnar", "Bogdan", "Boros", "Budai", "Csaba",
                        "Csonka", "Csorba", "Danko", "David", "Demeter", "Dobos", "Domotor", "Durko", "Edes", "Ersek",
                        "Farkas", "Fabian", "Feher", "Fekete", "Ferenc", "Fodor", "Foldi", "Fuzesi", "Gabor", "Gal",
                        "Gergely", "Gorbe", "Gulyas", "Gyarmati", "Gyongyosi", "Gyore", "Gyori", "Gyozo", "Hajdu", "Hegedus",
                        "Horvath", "Illes", "Istvan", "Juhasz", "Jonas", "Kantor", "Katona", "Kerekes", "Kiss", "Kocsis"
                      ]
                },
                'female': {
                    'first': [
                        "Szilvia", "Katalin", "Zsofia", "Maria", "Eva", "Ildiko", "Anita", "Edit", "Andrea", "Ibolya",
                        "Zsuzsanna", "Erzsebet", "Judit", "Ilona", "Krisztina", "Viktoria", "Lilla", "Hajnalka", "Nora", "Dora",
                        "Eniko", "Hanna", "Boglarka", "Reka", "Petra", "Bianka", "Emese", "Virag", "Orsolya", "Dalma",
                        "Szofia", "Anett", "Fanni", "Renata", "Noemi", "Eszter", "Nikolett", "Jazmin", "Kinga", "Lili",
                        "Luca", "Evelin", "Borbala", "Diana", "Flora", "Laura", "Lena", "Rozsa", "Sara", "Timea",
                        "Vanessa", "Zita", "Zsanett", "Livia", "Mariann", "Vivien", "Alexandra", "Barbara", "Cintia", "Ema",
                        "Fruzsina", "Greta", "Helga", "Iren", "Julia", "Kitti", "Leila", "Melinda", "Nelli", "Oliver",
                        "Panna", "Rita", "Szabina", "Tunde", "Veronika", "Viktoria", "Xenia", "Yvette", "Zselyke", "Zsanett",
                        "Zsuzsa", "Zoe", "Nora", "Liliana", "Maja", "Anna", "Bianka", "Dora", "Emma", "Fanni"
                      ],
                    'second': [
                        "Nagy", "Kovacs", "Toth", "Szabo", "Horvath", "Varga", "Kiss", "Molnar", "Nemeth", "Farkas",
                        "Papp", "Balazs", "Takacs", "Juhasz", "Simon", "Kalman", "Biro", "Feher", "Lakatos", "Pasztor",
                        "Pataki", "Torok", "Kis", "Magyar", "Sandor", "Feher", "Lukacs", "Szőke", "Racz", "Katona",
                        "Fekete", "Bakos", "Virag", "Janos", "Bakos", "Balogh", "Barta", "Biro", "Feher", "Gaspar",
                        "Balint", "Barna", "Beke", "Benedek", "Berces", "Bodnar", "Bogdan", "Boros", "Budai", "Csaba",
                        "Csonka", "Csorba", "Danko", "David", "Demeter", "Dobos", "Domotor", "Durko", "Edes", "Ersek",
                        "Farkas", "Fabian", "Feher", "Fekete", "Ferenc", "Fodor", "Foldi", "Fuzesi", "Gabor", "Gal",
                        "Gergely", "Gorbe", "Gulyas", "Gyarmati", "Gyongyosi", "Gyore", "Gyori", "Gyozo", "Hajdu", "Hegedus",
                        "Horvath", "Illes", "Istvan", "Juhasz", "Jonas", "Kantor", "Katona", "Kerekes", "Kiss", "Kocsis"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Gábor", "István", "János", "László", "Péter", "Zoltán", "Attila", "Tamás", "Ferenc", "István",
                        "András", "József", "Imre", "Sándor", "Zsolt", "Béla", "György", "Mihály", "Norbert", "Károly",
                        "Róbert", "Gyula", "Csaba", "Krisztián", "Ferenc", "Máté", "László", "Szabolcs", "Viktor", "Balázs",
                        "Dávid", "József", "Károly", "András", "Miklós", "Levente", "János", "Zoltán", "Gábor", "Péter",
                        "László", "Ferenc", "István", "Tamás", "Imre", "Sándor", "Norbert", "Zsolt", "György", "Mihály",
                        "Róbert", "Gyula", "Csaba", "Krisztián", "Máté", "László", "Szabolcs", "Viktor", "Balázs", "Dávid",
                        "József", "Károly", "András", "Miklós", "Levente", "János", "Zoltán", "Gábor", "Péter", "László",
                        "Ferenc", "István", "Tamás", "Imre", "Sándor", "Norbert", "Zsolt", "György", "Mihály", "Róbert",
                        "Gyula", "Csaba", "Krisztián", "Ferenc", "Máté", "László", "Szabolcs", "Viktor", "Balázs", "Dávid"
                      ],
                    'second': [
                        "Nagy", "Kovács", "Tóth", "Szabó", "Horváth", "Varga", "Kiss", "Molnár", "Németh", "Farkas",
                        "Papp", "Balázs", "Takács", "Juhász", "Simon", "Kálmán", "Bíró", "Fehér", "Lakatos", "Pásztor",
                        "Pataki", "Török", "Kis", "Magyar", "Sándor", "Fehér", "Lukács", "Szőke", "Rácz", "Katona",
                        "Fekete", "Bakos", "Virág", "János", "Bakos", "Balogh", "Barta", "Bíró", "Fehér", "Gáspár",
                        "Bálint", "Barna", "Beke", "Benedek", "Bérces", "Bodnár", "Bogdán", "Boros", "Budai", "Csaba",
                        "Csonka", "Csorba", "Dankó", "Dávid", "Demeter", "Dobos", "Dömötör", "Durkó", "Édes", "Érsek",
                        "Farkas", "Fábián", "Fehér", "Fekete", "Ferenc", "Fodor", "Földi", "Füzesi", "Gábor", "Gál",
                        "Gergely", "Görbe", "Gulyás", "Gyarmati", "Gyöngyösi", "Györe", "Györi", "Győző", "Hajdú", "Hegedüs",
                        "Horváth", "Illés", "István", "Juhász", "Jónás", "Kántor", "Katona", "Kerekes", "Kiss", "Kocsis"
                      ]
                },
                'female': {
                    'first': [
                        "Szilvia", "Katalin", "Zsófia", "Mária", "Eva", "Ildikó", "Anita", "Edit", "Andrea", "Ibolya",
                        "Zsuzsanna", "Erzsébet", "Judit", "Ilona", "Krisztina", "Viktória", "Lilla", "Hajnalka", "Nóra", "Dóra",
                        "Enikő", "Hanna", "Boglárka", "Réka", "Petra", "Bianka", "Emese", "Virág", "Orsolya", "Dalma",
                        "Szofia", "Anett", "Fanni", "Renáta", "Noémi", "Eszter", "Nikolett", "Jázmin", "Kinga", "Lili",
                        "Luca", "Evelin", "Borbála", "Diana", "Flóra", "Laura", "Léna", "Rózsa", "Sára", "Tímea",
                        "Vanessa", "Zita", "Zsanett", "Livia", "Mariann", "Vivien", "Alexandra", "Barbara", "Cintia", "Ema",
                        "Fruzsina", "Gréta", "Helga", "Irén", "Júlia", "Kitti", "Leila", "Melinda", "Nelli", "Olivér",
                        "Panna", "Rita", "Szabina", "Tünde", "Veronika", "Viktória", "Xénia", "Yvette", "Zselyke", "Zsanett",
                        "Zsuzsa", "Zoé", "Nóra", "Liliána", "Maja", "Anna", "Bianka", "Dóra", "Emma", "Fanni"
                      ],
                    'second': [
                        "Nagy", "Kovács", "Tóth", "Szabó", "Horváth", "Varga", "Kiss", "Molnár", "Németh", "Farkas",
                        "Papp", "Balázs", "Takács", "Juhász", "Simon", "Kálmán", "Bíró", "Fehér", "Lakatos", "Pásztor",
                        "Pataki", "Török", "Kis", "Magyar", "Sándor", "Fehér", "Lukács", "Szőke", "Rácz", "Katona",
                        "Fekete", "Bakos", "Virág", "János", "Bakos", "Balogh", "Barta", "Bíró", "Fehér", "Gáspár",
                        "Bálint", "Barna", "Beke", "Benedek", "Bérces", "Bodnár", "Bogdán", "Boros", "Budai", "Csaba",
                        "Csonka", "Csorba", "Dankó", "Dávid", "Demeter", "Dobos", "Dömötör", "Durkó", "Édes", "Érsek",
                        "Farkas", "Fábián", "Fehér", "Fekete", "Ferenc", "Fodor", "Földi", "Füzesi", "Gábor", "Gál",
                        "Gergely", "Görbe", "Gulyás", "Gyarmati", "Gyöngyösi", "Györe", "Györi", "Győző", "Hajdú", "Hegedüs",
                        "Horváth", "Illés", "István", "Juhász", "Jónás", "Kántor", "Katona", "Kerekes", "Kiss", "Kocsis"
                      ],
                }
            }
        }},
    'Germany': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Alexander", "Benjamin", "Christian", "Daniel", "Erik", "Felix", "Gregor", "Hannes", "Isaac", "Johannes",
                        "Klaus", "Lukas", "Maximilian", "Niklas", "Oliver", "Paul", "Quentin", "Raphael", "Sebastian", "Tobias",
                        "Udo", "Valentin", "Werner", "Xaver", "Yannick", "Zacharias", "Adam", "Benedikt", "Carl", "David",
                        "Emil", "Finn", "Gustav", "Heinrich", "Ivan", "Jakob", "Karl", "Leon", "Matthias", "Nils",
                        "Oskar", "Peter", "Quirin", "Rupert", "Simon", "Theo", "Ulrich", "Valentin", "Wolfgang", "Xander",
                        "Yves", "Zoltan", "Anton", "Boris", "Clemens", "Dieter", "Eduard", "Friedrich", "Günther", "Heinz",
                        "Ignaz", "Josef", "Klemens", "Ludwig", "Manfred", "Norbert", "Otto", "Pius", "Quintus", "Rainer",
                        "Siegfried", "Theodor", "Ulrich", "Valentin", "Werner", "Xaver", "Yannick", "Zacharias"
                      ],
                    'second': [
                        "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Schulz", "Wagner", "Becker", "Hoffmann", "Schäfer",
                        "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
                        "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann",
                        "Schmid", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Walter", "Mayer", "Huber", "Kaiser",
                        "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß", "Jung", "Hahn", "Schubert", "Vogel",
                        "Friedrich", "Keller", "Günther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann",
                        "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Schumacher",
                        "Vogt", "Stein", "Jäger", "Otto", "Sommer", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber",
                        "Graf", "Schulte", "Dietrich", "Kühn", "Engel", "Horn", "Böhringer", "Brockmann", "Wimmer", "Brand",
                        "Wolff", "Schindler", "Ziegler", "Götz", "Kraemer", "Herzog", "Philipp", "Beyer", "Brunner", "Buchholz"
                      ]
                },
                'female': {
                    'first': [
                        "Anna", "Bianca", "Caroline", "Daniela", "Elena", "Frieda", "Gabriela", "Hannah", "Isabel", "Julia",
                        "Katharina", "Lea", "Marie", "Nina", "Olivia", "Paula", "Quirina", "Rebecca", "Sophia", "Theresa",
                        "Ulrike", "Veronica", "Wanda", "Xenia", "Yvonne", "Zara", "Amelie", "Beatrix", "Clara", "Diana",
                        "Emma", "Fiona", "Greta", "Helena", "Ingrid", "Johanna", "Klara", "Lena", "Mia", "Natalia",
                        "Ophelia", "Penelope", "Quinta", "Rosa", "Selina", "Tina", "Ursula", "Valentina", "Wilma", "Xandra",
                        "Yvette", "Zelda", "Anja", "Bettina", "Carmen", "Dorothea", "Emilia", "Frida", "Gisela", "Heidi",
                        "Irene", "Jutta", "Karla", "Liselotte", "Magdalena", "Nadine", "Oda", "Petra", "Quintana", "Regina",
                        "Sylvia", "Thea", "Ulla", "Vanessa", "Wilhelmina", "Xaveria", "Yvonne", "Zita", "Annika", "Britta",
                        "Cäcilie", "Dagmar", "Eleonore", "Fanny", "Gilda", "Hildegard", "Ida", "Josefine", "Katarina", "Lara"
                      ],
                    'second': [
                        "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Schulz", "Wagner", "Becker", "Hoffmann", "Schäfer",
                        "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
                        "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann",
                        "Schmid", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Walter", "Mayer", "Huber", "Kaiser",
                        "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß", "Jung", "Hahn", "Schubert", "Vogel",
                        "Friedrich", "Keller", "Günther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann",
                        "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Schumacher",
                        "Vogt", "Stein", "Jäger", "Otto", "Sommer", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber",
                        "Graf", "Schulte", "Dietrich", "Kühn", "Engel", "Horn", "Böhringer", "Brockmann", "Wimmer", "Brand",
                        "Wolff", "Schindler", "Ziegler", "Götz", "Kraemer", "Herzog", "Philipp", "Beyer", "Brunner", "Buchholz"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Alexander", "Benjamin", "Christian", "Daniel", "Erik", "Felix", "Gregor", "Hannes", "Isaac", "Johannes",
                        "Klaus", "Lukas", "Maximilian", "Niklas", "Oliver", "Paul", "Quentin", "Raphael", "Sebastian", "Tobias",
                        "Udo", "Valentin", "Werner", "Xaver", "Yannick", "Zacharias", "Adam", "Benedikt", "Carl", "David",
                        "Emil", "Finn", "Gustav", "Heinrich", "Ivan", "Jakob", "Karl", "Leon", "Matthias", "Nils",
                        "Oskar", "Peter", "Quirin", "Rupert", "Simon", "Theo", "Ulrich", "Valentin", "Wolfgang", "Xander",
                        "Yves", "Zoltan", "Anton", "Boris", "Clemens", "Dieter", "Eduard", "Friedrich", "Günther", "Heinz",
                        "Ignaz", "Josef", "Klemens", "Ludwig", "Manfred", "Norbert", "Otto", "Pius", "Quintus", "Rainer",
                        "Siegfried", "Theodor", "Ulrich", "Valentin", "Werner", "Xaver", "Yannick", "Zacharias"
                      ],
                    'second': [
                        "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Schulz", "Wagner", "Becker", "Hoffmann", "Schäfer",
                        "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
                        "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann",
                        "Schmid", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Walter", "Mayer", "Huber", "Kaiser",
                        "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß", "Jung", "Hahn", "Schubert", "Vogel",
                        "Friedrich", "Keller", "Günther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann",
                        "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Schumacher",
                        "Vogt", "Stein", "Jäger", "Otto", "Sommer", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber",
                        "Graf", "Schulte", "Dietrich", "Kühn", "Engel", "Horn", "Böhringer", "Brockmann", "Wimmer", "Brand",
                        "Wolff", "Schindler", "Ziegler", "Götz", "Kraemer", "Herzog", "Philipp", "Beyer", "Brunner", "Buchholz"
                      ]
                },
                'female': {
                    'first': [
                        "Anna", "Bianca", "Caroline", "Daniela", "Elena", "Frieda", "Gabriela", "Hannah", "Isabel", "Julia",
                        "Katharina", "Lea", "Marie", "Nina", "Olivia", "Paula", "Quirina", "Rebecca", "Sophia", "Theresa",
                        "Ulrike", "Veronica", "Wanda", "Xenia", "Yvonne", "Zara", "Amelie", "Beatrix", "Clara", "Diana",
                        "Emma", "Fiona", "Greta", "Helena", "Ingrid", "Johanna", "Klara", "Lena", "Mia", "Natalia",
                        "Ophelia", "Penelope", "Quinta", "Rosa", "Selina", "Tina", "Ursula", "Valentina", "Wilma", "Xandra",
                        "Yvette", "Zelda", "Anja", "Bettina", "Carmen", "Dorothea", "Emilia", "Frida", "Gisela", "Heidi",
                        "Irene", "Jutta", "Karla", "Liselotte", "Magdalena", "Nadine", "Oda", "Petra", "Quintana", "Regina",
                        "Sylvia", "Thea", "Ulla", "Vanessa", "Wilhelmina", "Xaveria", "Yvonne", "Zita", "Annika", "Britta",
                        "Cäcilie", "Dagmar", "Eleonore", "Fanny", "Gilda", "Hildegard", "Ida", "Josefine", "Katarina", "Lara"
                      ],
                    'second': [
                        "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Schulz", "Wagner", "Becker", "Hoffmann", "Schäfer",
                        "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
                        "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann",
                        "Schmid", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Walter", "Mayer", "Huber", "Kaiser",
                        "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß", "Jung", "Hahn", "Schubert", "Vogel",
                        "Friedrich", "Keller", "Günther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann",
                        "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Schumacher",
                        "Vogt", "Stein", "Jäger", "Otto", "Sommer", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber",
                        "Graf", "Schulte", "Dietrich", "Kühn", "Engel", "Horn", "Böhringer", "Brockmann", "Wimmer", "Brand",
                        "Wolff", "Schindler", "Ziegler", "Götz", "Kraemer", "Herzog", "Philipp", "Beyer", "Brunner", "Buchholz"
                      ],
                }
            }
        }},
    'Hong Kong': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Greece': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Alexandros", "Nikolaos", "Georgios", "Kostas", "Dimitris",
                        "Panagiotis", "Antonis", "Ioannis", "Spyros", "Christos",
                        "Evangelos", "Andreas", "Theodoros", "Paulos", "Athanasios",
                        "Konstantinos", "Giorgos", "Stavros", "Petros", "Vasilis",
                        "Aristotelis", "Ilias", "Michalis", "Pantelis", "Andreas",
                        "Kleos", "Aris", "Dionysis", "Thanasis", "Anastasios",
                        "Panagis", "Manolis", "Stelios", "Charalampos", "Sotiris",
                        "Savvas", "Eleftherios", "Antonios", "Argyris", "Vasilis",
                        "Giorgos", "Dimitris", "Nikolaos", "Konstantinos", "Theodoros",
                        "Ioannis", "Stavros", "Panagiotis", "Andreas", "Christos"
                      ],
                    'second': [
                        "Papadopoulos", "Karagiannis", "Nikolaidis", "Dimitriou", "Konstantinidis",
                        "Athanasios", "Papanikolaou", "Michailidis", "Georgiou", "Andreas",
                        "Stavridis", "Kontogiannis", "Karampetis", "Pantelidis", "Papastamatios",
                        "Stamatopoulos", "Markopoulou", "Sarantis", "Kontogiorghis", "Liapis",
                        "Kalogirou", "Katsifaras", "Fokidis", "Papantoniou", "Dourou",
                        "Vlachopoulos", "Pappas", "Kyriakou", "Manolias", "Liberopoulos",
                        "Antoniadis", "Katsaros", "Alexopoulos", "Giannoulis", "Kourkoulos",
                        "Dimitrakopoulos", "Margaitis", "Maniatis", "Yiannis", "Tsakalidis",
                        "Papachristos", "Tsalikis", "Margaitis", "Kourtidis", "Makris"
                      ]
                },
                'female': {
                    'first': [
                        "Aikaterini", "Sofia", "Maria", "Eleni", "Anastasia",
                        "Evangelia", "Angeliki", "Dimitra", "Katerina", "Alexandra",
                        "Panagia", "Ioanna", "Arete", "Petra", "Athina",
                        "Christina", "Eirini", "Aimilia", "Elisavet", "Eleutheria",
                        "Evi", "Kalliopi", "Danae", "Georgia", "Chara",
                        "Anna", "Rea", "Niki", "Ariadne", "Melina",
                        "Marina", "Stella", "Kleo", "Klara", "Aristea",
                        "Lydia", "Zoi", "Myrto", "Fotini", "Elsa",
                        "Athanasia", "Penelope", "Agapi", "Lampria", "Vasiliki",
                        "Arietta", "Sofitsa", "Panselinos", "Efi", "Kori",
                        "Evdiki", "Rousa", "Nefeli", "Iliana", "ProDromi",
                        "Dukissa", "Smaragda", "Thalia", "Korina", "Kalypto",
                        "Anaxagora", "Ekaterina", "Marianna", "Roxani", "Theodora",
                        "Kyriaki", "Stavroula", "Asimina", "Ismene", "Drosia",
                        "Menexenia", "Glykeria", "Arkadia", "Efthalia", "Vangelio",
                        "Evdiki", "Manto", "Katina", "Selini", "Stamatia",
                        "Magdalini", "Kallisto", "Argyro", "Epistimi", "Vana"
                      ],
                    'second': [
                        "Papadopoulos", "Karagiannis", "Nikolaidis", "Dimitriou", "Konstantinidis",
                        "Athanasios", "Papanikolaou", "Michailidis", "Georgiou", "Andreas",
                        "Stavridis", "Kontogiannis", "Karampetis", "Pantelidis", "Papastamatios",
                        "Stamatopoulos", "Markopoulou", "Sarantis", "Kontogiorghis", "Liapis",
                        "Kalogirou", "Katsifaras", "Fokidis", "Papantoniou", "Dourou",
                        "Vlachopoulos", "Pappas", "Kyriakou", "Manolias", "Liberopoulos",
                        "Antoniadis", "Katsaros", "Alexopoulos", "Giannoulis", "Kourkoulos",
                        "Dimitrakopoulos", "Margaitis", "Maniatis", "Yiannis", "Tsakalidis",
                        "Papachristos", "Tsalikis", "Margaitis", "Kourtidis", "Makris"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Αλέξανδρος", "Νικόλαος", "Γεώργιος", "Κώστας", "Δημήτρης",
                        "Παναγιώτης", "Αντώνης", "Ιωάννης", "Σπύρος", "Χρήστος",
                        "Ευάγγελος", "Ανδρέας", "Θεόδωρος", "Παύλος", "Αθανάσιος",
                        "Κωνσταντίνος", "Γιώργος", "Σταύρος", "Πέτρος", "Βασίλης",
                        "Αριστοτέλης", "Ηλίας", "Μιχάλης", "Παντελής", "Ανδρέας",
                        "Κλέος", "Αρης", "Διονύσης", "Θανάσης", "Αναστάσιος",
                        "Παναγής", "Μανώλης", "Στέλιος", "Χαράλαμπος", "Σωτήρης",
                        "Σάββας", "Ελευθέριος", "Αντώνιος", "Αργύρης", "Βασίλης",
                        "Γιώργος", "Δημήτρης", "Νικόλαος", "Κωνσταντίνος", "Θεόδωρος",
                        "Ιωάννης", "Σταύρος", "Παναγιώτης", "Ανδρέας", "Χρήστος"
                      ],
                    'second': [
                        "Παπαδόπουλος", "Καραγιάννης", "Νικολαΐδης", "Δημητρίου", "Κωνσταντινίδης",
                        "Αθανασίου", "Παπανικολάου", "Μιχαηλίδης", "Γεωργίου", "Ανδρέου",
                        "Σταυρίδης", "Κοντογιώργης", "Καραμπέτης", "Παντελίδης", "Παπασταματίου",
                        "Σταματόπουλος", "Μαρκοπούλου", "Σαράντης", "Κούτσουρας", "Λιάπης",
                        "Καλογήρου", "Κατσιφάρας", "Φωκίδης", "Παπαντωνίου", "Δούρου",
                        "Βλαχόπουλος", "Παππάς", "Κυριακού", "Μανωλιάς", "Λυμπερόπουλος",
                        "Αντωνιάδης", "Κατσαρός", "Αλεξόπουλος", "Γιαννούλης", "Κούρκουλος",
                        "Δημητρακόπουλος", "Μαργαρίτης", "Μανιάτης", "Γιάννη", "Τσακαλίδης",
                        "Παπαχρήστος", "Τσαλίκης", "Μαργαρίτης", "Κουρτίδης", "Μακρής"
                      ]
                },
                'female': {
                    'first': [
                        "Αικατερίνη", "Σοφία", "Μαρία", "Ελένη", "Αναστασία",
                        "Ευαγγελία", "Αγγελική", "Δήμητρα", "Κατερίνα", "Αλεξάνδρα",
                        "Παναγία", "Ιωάννα", "Αρετή", "Πέτρα", "Αθηνά",
                        "Χριστίνα", "Ειρήνη", "Αιμιλία", "Ελίσαβετ", "Ελευθερία",
                        "Εύη", "Καλλιόπη", "Δανάη", "Γεωργία", "Χαρά", 
                        "Αννα", "Ρέα", "Νίκη", "Αριάδνη", "Μελίνα",
                        "Μαρίνα", "Στέλλα", "Κλειώ", "Κλάρα", "Αριστέα",
                        "Λυδία", "Ζωή", "Μυρτώ", "Φωτεινή", "Ελσα",
                        "Αθανασία", "Πηνελόπη", "Αγάπη", "Λάμπρια", "Βασιλική",
                        "Αριέττα", "Σοφίτσα", "Πανσέληνος", "Εφη", "Κόρη",
                        "Ευρυδίκη", "Ρούσα", "Νεφέλη", "Ηλιάνα", "Προδρόμη",
                        "Δούκισσα", "Σμαράγδα", "Θάλεια", "Κορίνα", "Καλύπτω",
                        "Αναξαγόρα", "Εκατερίνα", "Μαριάννα", "Ρωξάνη", "Θεοδώρα",
                        "Κυριακή", "Σταυρούλα", "Ασημίνα", "Ισμήνη", "Δροσιά",
                        "Μενεξένια", "Γλυκερία", "Αρκαδία", "Ευθαλία", "Βαγγελιώ",
                        "Ευρυδίκη", "Μαντώ", "Κατίνα", "Σελήνη", "Σταματία",
                        "Μαγδαληνή", "Καλλιστώ", "Αργυρώ", "Επιστήμη", "Βάνα"
                      ],
                    'second': [
                        "Παπαδόπουλος", "Καραγιάννης", "Νικολαΐδης", "Δημητρίου", "Κωνσταντινίδης",
                        "Αθανασίου", "Παπανικολάου", "Μιχαηλίδης", "Γεωργίου", "Ανδρέου",
                        "Σταυρίδης", "Κοντογιώργης", "Καραμπέτης", "Παντελίδης", "Παπασταματίου",
                        "Σταματόπουλος", "Μαρκοπούλου", "Σαράντης", "Κούτσουρας", "Λιάπης",
                        "Καλογήρου", "Κατσιφάρας", "Φωκίδης", "Παπαντωνίου", "Δούρου",
                        "Βλαχόπουλος", "Παππάς", "Κυριακού", "Μανωλιάς", "Λυμπερόπουλος",
                        "Αντωνιάδης", "Κατσαρός", "Αλεξόπουλος", "Γιαννούλης", "Κούρκουλος",
                        "Δημητρακόπουλος", "Μαργαρίτης", "Μανιάτης", "Γιάννη", "Τσακαλίδης",
                        "Παπαχρήστος", "Τσαλίκης", "Μαργαρίτης", "Κουρτίδης", "Μακρής"
                      ],
                }
            }
        }},
    'Georgia': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Denmark': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Israel': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Iceland': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Kazakhstan': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Cyprus': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Latvia': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Lithuania': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Morocco': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Moldova': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Netherlands': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Norway': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'UAE': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Poland': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Portugal': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Romania': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Saudi Arabia': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Serbia': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Slovakia': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Slovenia': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Tunisia': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Türkiye': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Finland': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Croatia': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Czech': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Switzerland': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Sweden': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }}, 
    'Estonia': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Ukraine': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'Belarus': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }},
    'USA': { 'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }}
}

const object = {
    'country': {
        'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        },
        'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }
    }
}

export default countries;