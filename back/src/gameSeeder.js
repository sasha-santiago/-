const mongoose = require('mongoose');
const Question = require('../models/question')

const uri = 'mongodb://localhost:27017/EaglesGame'
mongoose.connect(uri, {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const gameRawData = [

  {
    collectionTitle: 'Все о животных',
    collection:[
      {
        question: 'Эти животные, в отличие от других хищников, питаются не только мясом: они едят траву и ягоды',
        answer: 'Медведи',
        value: 200,
      },
      {
        question: 'Это животное, не имея рук, может поднять с земли монетку, гвоздик и тяжелую бочку',
        answer: 'Слон',
        value: 400,
      },
      {
        question: 'Этих млекопитающих (не собак) приручили индийские магараджи, персидские шахи, турецкие султаны, арабские шейхи, эфиопские императоры к охоте на других животных',
        answer: 'Гепард',
        value: 600,
      },
      {
        question: 'У этого крупного животного (до 2,5 метров ростом) детеныш рождается длиной всего три сантиметра',
        answer: 'Кенгуру',
        value: 800,
      },
      {
        question: 'Это животное достигло пределов совершенства в скрытности, научившись не попадаться на глаза человеку. Его инстинкт самосохранения развит сильнее, чем у других млекопитающих. Его называют «луговым волком». А как еще',
        answer: 'Койот',
        value: 1000,
      }]
  },

  {
    collectionTitle: 'История',
    collection:[
      {
        question: 'Первый российский император',
        answer: 'Петр 1',
        value: 200,
      },
      {
        question: 'Он спал 33 года, а потом проснулся и даже угодил на знаменитую картину В.М.Васнецова. Кто это',
        answer: 'Илья Муромец',
        value: 400,
      },
      {
        question: 'Раньше там жили индейцы, а сейчас это самая густонаселенная испаноязычная страна мира. Какая',
        answer: 'Мексика',
        value: 600,
      },
      {
        question: 'За всю историю существования Военного ордена Победоносца Георгия, полных его кавалеров было четверо. Все они фельдмаршалы: Барклай-де-Толли, Паскевич- Эриванский, Дибич-Забалканский и …Кто еще',
        answer: 'Кутузов',
        value: 800,
      },
      {
        question: 'Последний год Первой мировой войны положил начало еще одной общеевропейской трагедии, приведшей к гибели почти в пять раз большего количества людей, чем в годы самой войны. Что это было',
        answer: 'Испанка',
        value: 1000,
      }]
  },
  {
    collectionTitle: 'Столицы',
    collection:[
      {
        question: 'Столица Алжира',
        answer: 'Алжир',
        value: 200,
      },
      {
        question: 'Столица Вьетнама',
        answer: 'Ханой',
        value: 400,
      },
      {
        question: 'Столица Ирака',
        answer: 'Багдад',
        value: 600,
      },
      {
        question: 'Столица Канады',
        answer: 'Оттава',
        value: 800,
      },
      {
        question: 'Столица России',
        answer: 'Москва',
        value: 1000,
      }]
  },
  {
    collectionTitle: 'Жидкость',
    collection:[
      {
        question: 'Это слово происходит от латинского слова, означающего „жидкость“',
        answer: 'Ликер',
        value: 200,
      },
      {
        question: 'В Вавилоне за это преступление пивоваров топили в бочке с собственным же пивом',
        answer: 'Разбавление пива',
        value: 400,
      },
      {
        question: 'Этот популярный сорт пива был любимым среди носильщиков на лондонском вокзале «Виктория», за счёт чего и получил своё название',
        answer: 'Портер ',
        value: 600,
      },
      {
        question: 'В этом городе расположена самая большая пивная в мире',
        answer: 'Мюнхен',
        value: 800,
      },
      {
        question: 'по одной из версий это слово появилось в результате английской традиции поднимать боевой дух бойцовых петухов перед поединками крепкими напитками',
        answer: 'Коктейль',
        value: 1000,
      }]
  },
  {
    collectionTitle: 'MARVEL',
    collection:[
      {
        question: 'Как называется классический молот Тора',
        answer: 'Мьеллнир',
        value: 200,
      },
      {
        question: 'Кто сыграл Локи в мстителях',
        answer: 'Том Хиддлстон',
        value: 400,
      },
      {
        question: 'Кто сыграл Тора в мстителях',
        answer: 'Крис Хемсворт',
        value: 600,
      },
      {
        question: 'Злодей-титан который собирал камни бесконечности',
        answer: 'Танос',
        value: 800,
      },
      {
        question: ' Кто сыграл Доктора Стрэнджа в мстителях',
        answer: 'Бенедикт Камбербэтч',
        value: 1000,
      }]
  },
  {
    collectionTitle: 'Горячая Вода',
    collection:[
      {
        question: 'Существует несколько версий изобретения этого коктейля латиноамериканского происхождения, но женское имя во всех версиях одно и то же',
        answer: 'Маргарита',
        value: 200,
      },
      {
        question: 'именно этим термином обозначаются вина с наименьшим содержанием сахара ',
        answer: 'Брют натур',
        value: 400,
      },
      {
        question: 'основу джина составляет настой ягод этого растения ',
        answer: 'Можжевельник',
        value: 600,
      },
      {
        question: 'эта, пожалуй, самая известная марка шампанского получила свое имя в честь монаха, жившего в XVII веке ',
        answer: 'Дом Периньон',
        value: 800,
      },
      {
        question: 'по семейному преданию, эмблема этого напитка появилась, когда жена владельца, зайдя на фабрику, заметила колонию летучих мышей, живших на стропилах',
        answer: 'Бакарди',
        value: 1000,
      }]
  },
]

const seeder = async () => {
  for (theme of gameRawData) {
    const collection = theme.collection;
    for (el of collection) {
      const newQuestion = new Question({
        collectionTitle: theme.collectionTitle,
        question: el.question,
        answer: el.answer,
        value: el.value,
      })
      await newQuestion.save()
    }
  }
  mongoose.disconnect()
}

seeder()
