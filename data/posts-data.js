// 将这理解为本地数据库
var local_database = [{
    id: 0,
    title: '这是我最好的朋友——老乔,也是我们共同的好朋友。谢谢老铁的的牵线搭桥，才让我们认识彼此^_ ^',
    imgurl: 'http://static.gangguwang.com/image/2018/7/8/12/37/5b41951310f4e80009001084.jpg',
    headimg:'http://static.gangguwang.com/image/2018/7/8/14/34/5b41b08e10f4e800090010a8.jpg',
    headtitle:'一枚“屌丝男”',
    desc:'现在我们都称呼他为老乔，我和他2009年初识，他作为一名高三插班生转来我们班，从那时起的友谊一直持续到现在，我想我们这样子还能到未来的以后，对么，老乔？',
    columnimg:'http://static-test.gangguwang.com/image/2018/7/11/11/29/5b45ea1af667ea00090013be.jpg',
    columndesc:' 有些人，互损但不记仇；有些人，再见依旧亲切如故；而你就是这个有些人；人之相识,贵在相知,人之相知,贵在知心'
  },
  {
    id: 1,
    title: '也许他自带幸运光环吧？点个赞也能被抽中去当长恨歌首映式的观众^ _ ^',
    imgurl: 'http://static.gangguwang.com/image/2018/7/8/13/2/5b419ae310f4e80009001086.jpg',
    headimg:'http://static.gangguwang.com/image/2018/7/8/17/38/5b41db8510f4e800090010ae.jpg',
    headtitle: '长恨歌',
    desc: '无意中参加今日头条在朋友圈的留言活动就被选为幸运观众，有幸参加长恨歌的首映式。初春的阳光洒在广场上，恰好可以任意摆拍。我想你就是我是小幸运吧？',
    columnimg: 'http://static.gangguwang.com/image/2018/7/9/12/39/5b42e6f310f4e800090012b3.jpg',
    columndesc: '喜欢看见你笑，就像冬日里突然冒出的一缕阳光，温暖、踏实。“回眸一笑百媚生，六宫粉黛无颜色”亦可以形容你'
  },
  {
    id: 2,
    title: '这是去年端午节，我们报团去武汉溜达一圈^_^',
    imgurl: 'http://static.gangguwang.com/image/2018/7/8/13/3/5b419b2510f4e80009001088.jpg',
    headimg: 'http://static.gangguwang.com/image/2018/7/9/16/34/5b431e0910f4e800090013c0.jpg',
    headtitle: '武汉三日游',
    desc: '如果喜欢一个人，那就跟他一起去旅行。因为旅行途中你会发现另外一个不一样的TA。端午三天小长假，开始了我们的第一次远距离旅行……这是习大大参观过的三峡大坝',
    columnimg: 'http://static.gangguwang.com/image/2018/7/9/16/35/5b431e3f10f4e800090013c2.jpg',
    columndesc: '原来在别人的相机里，我也是个大长腿哟~故论一个会拍照的男朋友该有多重要？与你走过的地方，都是风景'
  },
  {
    id: 3,
    title: '25岁生日，他当我的模特^_^',
    imgurl: 'http://static.gangguwang.com/image/2018/7/8/13/5/5b419b9c10f4e8000900108e.jpg',
    headimg: 'http://static.gangguwang.com/image/2018/7/10/17/17/5b44799910f4e800090017ec.jpg',
    headtitle: '25岁生日',
    desc: '记不清自己生日的人，你是我遇见的第一个人。但是我会帮你记住这件大事，这样你是不是少记一件事了？那你是不是应该一直做我的模特？',
    columnimg: 'http://static.gangguwang.com/image/2018/7/10/17/20/5b447a4f10f4e800090017ee.jpg',
    columndesc: '我们的世界，希望你和我一直是主角。刚看隋文帝杨坚和文献皇后独孤伽罗的故事，满满感动'
  },
  {
    id: 4,
    title: '子博哥在北京出差，我蹭着去北京逛啊逛^_^',
    imgurl: 'http://static.gangguwang.com/image/2018/7/8/13/4/5b419b4010f4e8000900108a.jpg',
    headimg: 'http://static.gangguwang.com/image/2018/7/10/17/37/5b447e3e10f4e80009001816.jpg',
    headtitle: '北京，北京',
    desc: '喜欢北京的湛蓝的天空，洁白的云朵。对天安门前的毛主席，自己也是肃然起敬；原来中国的各个地方，都有着似曾相识的感觉，也许是因为身边陪伴的人熟悉',
    columnimg: 'http://static.gangguwang.com/image/2018/7/10/17/25/5b447b9710f4e80009001800.jpg',
    columndesc: '不到长城非好汉！于是我们第一时间去的地方就是GreatWall。人山人海的队伍，不像爬山竟有点像赶集'
  },
  {
    id: 5,
    title: '我们在延安^_^',
    imgurl: 'http://static.gangguwang.com/image/2018/7/10/17/44/5b447fe010f4e8000900181a.jpg',
    headimg: 'http://static.gangguwang.com/image/2018/7/10/17/44/5b44801010f4e8000900181c.jpg',
    headtitle: '革命圣地',
    desc: '雷厉风行，其实也并不是完全贬义；生活也许有点冲动会更精彩一些；说走就走的旅行，是自己过的最开心的生日，不仅因为出去溜达了一圈，更是因为身边有你',
    columnimg: 'http://static.gangguwang.com/image/2018/7/10/17/45/5b44804c10f4e8000900181e.jpg',
    columndesc: '要么旅行，要么读书，身体和灵魂，必须有一个在路上。遇见的人和事，就是留给自己最宝贵的财富'
  },
  {
    id: 6,
    title: '2017的跨年夜，我们在乐华城^_^',
    imgurl: 'http://static.gangguwang.com/image/2018/7/8/13/4/5b419b5b10f4e8000900108c.jpg',
    headimg: 'http://static.gangguwang.com/image/2018/7/10/18/44/5b448e1210f4e8000900184c.jpg',
    headtitle: '欢乐世界',
    desc: '"仪式感，会让你在平凡又琐碎的日子里，找到诗意的生活，找到继续前进的微光，找到不愿将就的勇气。"恰好我将其信奉为真理，你却说我中毒太深',
    columnimg: 'http://static.gangguwang.com/image/2018/7/10/18/45/5b448e4010f4e80009001852.jpg',
    columndesc: '也许真是强迫症，总希望生命中的重要的日子恰好也是传统节日或者生日之类的纪念日，这就是我们俩的活动时间'
  },
  {
    id: 7,
    title: '这个是……^_^',
    imgurl: 'http://static.gangguwang.com/image/2018/7/8/13/6/5b419bd410f4e80009001090.jpg',
    headimg: 'http://static.gangguwang.com/image/2018/7/10/18/37/5b448c5d10f4e8000900184a.jpg',
    headtitle: '浓妆艳抹',
    desc: '第一时间就被朋友拆穿“是不是化妆了”？哈哈……是的啊，肯定是别人化的了。不过你不喜欢浓妆艳抹的叶叶，那以后就不乱涂乱画->还是做个安安静静的小女子吧',
    columnimg: 'http://static-test.gangguwang.com/image/2018/7/11/11/33/5b45eaf8f667ea00090013cf.jpg',
    columndesc: '此时，彼时，阳光微淡，岁月静好，安然若素。这个故事很长，需要耐心读完。最好的我们'
  }
];

module.exports = {
  postlist: local_database
}