//MINI BASE DE APIS
//EXEMPLOS...
//@SAYO

__path = process.cwd()

var express = require('express');
var router = express.Router();
var { exec } = require('child_process')
var fetch = require('node-fetch')
var canvacord = require('canvacord').Canvas
var fs = require('fs')
var thiccysapi = require('textmaker-thiccy')
var encode = require('nodejs-base64-encode')
var w5botapi = require('w5-textmaker')
var reverse = require('text-reverse')
var tiktok = require('tiktok-scraper-without-watermark')
let fancy = require('fancy-font-maker')
var turl = require('turl')

const {
  PlayLinkMP3,
  PlayLinkMP4,
  PlayAudio,
  PlayVideo,
  ytSearch
  } = require("./lib/youtube");

const creador = ['DMods'];

async function getBuffer(url) {
  he = await fetch(url).then(c => c.buffer())
   return he
}
async function getJson(url) {
  he = await fetch(url).then(c => c.json())
   return he
}
async function robarXd(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function getRandom(nans) {
  he = nans[Math.floor(Math.random() * nans.length)]
   return he
}

 router.get("/", (req, res)=> {
	   console.log(__dirname)
})

//[ - ////////// --- Api's Youtube --- ////////// - ]\\

router.get('/youtube/playmp3', async(req, res, next) => {
 q = req.query.q
if (!q) return res.json({ status : 400, criador : `${creador}`, result : "Coloque o parametro: q"})
PlayAudio(q).then((resultado) => {
 res.json({
 status: 200,
 creador: `${creador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `erro no servidor interno`
 })})})
 
 router.get('/youtube/playmp4', async(req, res, next) => {
q = req.query.q
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
PlayVideo(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${creador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `erro no servidor interno`
 })})})

 router.get('/youtube/mp3', async(req, res, next) => {
 link = req.query.link
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
PlayLinkMP3(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${creador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `erro no servidor interno`
 })})})

 router.get('/youtube/mp4', async(req, res, next) => {
 link = req.query.link
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
PlayLinkMP4(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 creador: `${creador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `erro no servidor interno`
 })})})

 router.get('/youtube/search', async(req, res, next) => {
q = req.query.q
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque el parametro: q"})
 ytSearch(q).then(result => {
res.json({
status: true,
creador: `${creador}`,
resultado: result
})}).catch(e => {
res.json({
msg: `erro no servidor interno`
})})})

//[ - ///////// --- Api's Text Pro --- ///////// - ]\\

router.get('/textpro/summer-neon', async(req, res, next) => {
  query = req.query.q
  if (!query) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque o parametro: q"})
  thiccysapi.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", query
  ).then(async (linkdaimagem) => { 
  try { 
  res.json({
  status: 400,
  creador: `${creador}`,
  resultado: {
  img: `${linkdaimagem}`,
  }})
  } catch(err) { 
  console.log(err)
  res.json({
  status: 400,
  creador: `${creador}`,
  resultado: {
  error: `${err}`,
  }})}})})

  router.get('/textpro/batman', async(req, res, next) => {
    query = req.query.q
    if (!query) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque o parametro: q"})
    thiccysapi.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", query
    ).then(async (linkdaimagem) => { 
    try { 
    res.json({
    status: 400,
    creador: `${creador}`,
    resultado: {
    img: `${linkdaimagem}`,
    }})
    } catch(err) { 
    console.log(err)
    res.json({
    status: 400,
    creador: `${creador}`,
    resultado: {
    error: `${err}`,
    }})}})})

    router.get('/textpro/pencil', async(req, res, next) => {
      query = req.query.q
      if (!query) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque o parametro: q"})
      thiccysapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", query
      ).then(async (linkdaimagem) => { 
      try { 
      res.json({
      status: 400,
      creador: `${creador}`,
      resultado: {
      img: `${linkdaimagem}`,
      }})
      } catch(err) { 
      console.log(err)
      res.json({
      status: 400,
      creador: `${creador}`,
      resultado: {
      error: `${err}`,
      }})}})})

router.get('/textpro/summer', async(req, res, next) => {
  query = req.query.q
  if (!query) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque o parametro: q"})
  thiccysapi.textpro("https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html", query
  ).then(async (linkdaimagem) => { 
  try { 
  res.json({
  status: 400,
  creador: `${creador}`,
  resultado: {
  img: `${linkdaimagem}`,
  }})
  } catch(err) { 
  console.log(err)
  res.json({
  status: 400,
  creador: `${creador}`,
  resultado: {
  error: `${err}`,
  }})}})})

  router.get('/textpro/3d_business', async(req, res, next) => {
    query = req.query.q
    if (!query) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque o parametro: q"})
    thiccysapi.textpro("https://textpro.me/3d-business-sign-text-effect-1078.html", query
    ).then(async (linkdaimagem) => { 
    try { 
    res.json({
    status: 200,
    creador: `${creador}`,
    resultado: {
    img: `${linkdaimagem}`,
    }})
    } catch(err) { 
    console.log(err)
    res.json({
    status: 400,
    creador: `${creador}`,
    resultado: {
    error: `${err}`,
    }})}})})
    
    router.get('/textpro/3dgoldenblack', async(req, res, next) => {
    query = req.query.q
    if (!query) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque o parametro: q"})
    thiccysapi.textpro("https://textpro.me/free-creative-3d-golden-text-effect-online-1075.html", query
    ).then(async (linkdaimagem) => { 
    try { 
    res.json({
    status: 200,
    creador: `${creador}`,
    resultado: {
    img: `${linkdaimagem}`,
    }})
    } catch(err) { 
    console.log(err)
    res.json({
    status: 400,
    creador: `${creador}`,
    resultado: {
    error: `${err}`,
    }})}})})

    router.get('/textpro/graffiti', async(req, res, next) => {
      text1 = req.query.texto1
      text2 = req.query.texto2
      if (!text1) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: texto1"})
      if (!text2) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: texto2"})
      thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
      [text1], [text2]
      ).then(async (linkdaimagem) => { 
      try { 
      res.json({
      status: 200,
      creador: `${creador}`,
      resultado: {
      img: `${linkdaimagem}`,
      }})
      } catch(err) { 
      console.log(err)
      res.json({
      status: 400,
      creador: `${creador}`,
      resultado: {
      error: `${err}`,
      }})}})})

    router.get('/textpro/pornhub', async(req, res, next) => {
      text1 = req.query.texto1
      text2 = req.query.texto2
      if (!text1) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: texto1"})
      if (!text2) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: texto2"})
      thiccysapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
      [texto1], [texto2]
      ).then(async (linkdaimagem) => { 
      try { 
      res.json({
      status: 200,
      creador: `${creador}`,
      resultado: {
      img: `${linkdaimagem}`,
      }})
      } catch(err) { 
      console.log(err)
      res.json({
      status: 400,
      creador: `${creador}`,
      resultado: {
      error: `${err}`,
      }})}})})
    
    router.get('/textpro/vintage', async(req, res, next) => {
    text1 = req.query.texto1
    text2 = req.query.texto2
    if (!text1) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: texto1"})
    if (!text2) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: texto2"})
    thiccysapi.textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html",
    [text1], [text2]
    ).then(async (linkdaimagem) => { 
    try { 
    res.json({
    status: 200,
    creador: `${creador}`,
    resultado: {
    img: `${linkdaimagem}`,
    }})
    } catch(err) { 
    console.log(err)
    res.json({
    status: 400,
    creador: `${creador}`,
    resultado: {
    error: `${err}`,
    }})}})})
    
    router.get('/textpro/halloween', async(req, res, next) => {
    text1 = req.query.texto1
    text2 = req.query.texto2
    if (!text1) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: texto1"})
    if (!text2) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: texto2"})
    thiccysapi.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html",
    [text1], [text2]
    ).then(async (linkdaimagem) => { 
    try { 
    res.json({
    status: 200,
    creador: `${creador}`,
    resultado: {
    img: `${linkdaimagem}`,
    }})
    } catch(err) { 
    console.log(err)
    res.json({
    status: 400,
    creador: `${creador}`,
    resultado: {
    error: `${err}`,
    }})}})})
    
    router.get('/textpro/thunder', async(req, res, next) => {
    query = req.query.q
    if (!query) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloca el parametro: q"})
    thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", query
    ).then(async (linkdaimagem) => { 
    try { 
    res.json({
    status: 200,
    creador: `${creador}`,
    resultado: {
    img: `${linkdaimagem}`,
    }})
    } catch(err) { 
    console.log(err)
    res.json({
    status: 400,
    creador: `${creador}`,
    resultado: {
    error: `${err}`,
    }})}})})

     //[ - ///////// --- Api's NSFW --- ///////// - ]\\

  router.all('/loli', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, response: 'Error en el servidor :/' })
   }
   })

   

  router.all('/Api/Nsfw/HentaiGif', async (req, res) => {
    try {
    json = JSON.parse(fs.readFileSync('lib/hnt_gifs.json').toString())
    random = json[Math.floor(Math.random() * json.length)]
    res.send({ status: 200, link: random })
    } catch (e) {
    res.send({ status: 400, response: 'Server Error!' })
    }
    })

    router.get('/nsfw/hentai', async (req, res) => {
      try {
      end = getRandom([,"waifu", "neko"])
      let { url } = await getJson(`https://api.waifu.pics/nsfw/${end}`)
      let buffer = await getBuffer(url)
      res.type('png')
      res.send(buffer)
      } catch {
      res.type('text/json')
      res.status(400).send({ status: 400, message: 'Error en el servido poravor reporta a DMods!' })
      }
      })
     
      router.all('/shota', async (req, res) => {
        try {
        json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
        random = json[Math.floor(Math.random() * json.length)]
        res.type('png')
        res.send(await getBuffer(random))
        } catch (e) {
        res.send({ status: 400, response: 'Server Error!' })
        }
        })

        router.all('/nsfw/pussy', async (req, res) => {
          try {
          json = JSON.parse(fs.readFileSync('lib/pussy.json').toString())
          random = json[Math.floor(Math.random() * json.length)]
          res.type('jpg')
          res.send(await getBuffer(random))
          } catch (e) {
          res.send({ status: 400, response: 'Server Error!' })
          }
          })
        router.all('/Nsfw/HentaiGifs', async (req, res) => {
          try {
          json = JSON.parse(fs.readFileSync('lib/hnt_gifs.json').toString())
          random = json[Math.floor(Math.random() * json.length)]
          res.type('gif')
          res.send(await getBuffer(random))
          } catch (e) {
          res.send({ status: 400, response: 'Server Error!' })
          }
          })
        router.all('/Nsfw/Masturbation', async (req, res) => {
          try {
          json = JSON.parse(fs.readFileSync('lib/masturbation.json').toString())
          random = json[Math.floor(Math.random() * json.length)]
          res.type('jpg')
          res.send(await getBuffer(random))
          } catch (e) {
          res.send({ status: 400, response: 'Server Error!' })
          }
          })
        router.all('/Nsfw/yuri', async (req, res) => {
          try {
          json = JSON.parse(fs.readFileSync('lib/yuri.json').toString())
          random = json[Math.floor(Math.random() * json.length)]
          res.type('jpg')
          res.send(await getBuffer(random))
          } catch (e) {
          res.send({ status: 400, response: 'Server Error!' })
          }
          })

          router.all('/nsfwloli', async (req, res) => {
            try {
            json = JSON.parse(fs.readFileSync('lib/nsfwlolis.json').toString())
            random = json[Math.floor(Math.random() * json.length)]
            res.type('png')
            res.send(await getBuffer(random))
            } catch (e) {
            res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
            }
            })
           
   
 //[ - ///////// --- Api's tools --- ///////// - ]\\

 router.all('/test', async (req, res, next) => {
  try {
    emojimix_api = `https://polarapi.herokuapp.com/youtube/playmp3?q=https://youtu.be/QvBTspzNiOc`
    op = await getJson(emojimix_api)
    res.send({ status: 400, result: `${op.resultado.download}` })
  } catch (err) {
    console.error(err)
    res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
  }
}
)

  router.all('/tools/emojimix', async (req, res, next) => {
    e1 = req.query.emoji1;
    e2 = req.query.emoji2;
    if (!e1) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque o parametro: EMOJI1"})
    if (!e2) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloque o parametro: EMOJI2"})
    try {
      emojimix_api = `https://infinitybot-api.herokuapp.com/api/lzcanvas/emojimix?emoji1=${e1}&emoji2=${e2}&apikey=lz`
      res.type('png')
      res.send(await getBuffer(emojimix_api))
    } catch (err) {
      console.error(err)
    }
  }
  )

  router.all('/tools/encode', async (req, res, next) => {
    texto = req.query.texto;
    if(!texto) return res.json({status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: ?texto="})
    try {
      anu = await encode.encode(`${texto}`, 'base64')
      res.json({ status: 200, creador: `${creador}`, resultado: { encode: `${anu}`}})
    } catch (err) {
      res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
    }
  }
  )

  router.all('/tools/decode', async (req, res, next) => {
    texto = req.query.texto;
    if(!texto) return res.json({status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: ?texto="})
    try {
      anu = await encode.decode(`${texto}`, 'base64')
      res.json({ status: 200, creador: `${creador}`, resultado: { decode: `${anu}`}})
    } catch (err) {
      res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
    }
  }
  )

  router.all('/tools/fliptxt', async (req, res, next) => {
    texto = req.query.texto;
    if(!texto) return res.json({status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: ?texto="})
    try {
      newStr = reverse(`${texto}`)
      res.json({ status: 200, creador: `${creador}`, resultado: { reverse: `${newStr}`}})
    } catch (err) {
      res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
    }
  }
  )

  router.all('/tools/fancytext', async (req, res, next) => {
    texto = req.query.texto;
    if(!texto) return res.json({status : 400, creador : `${creador}`, mensaje : "Coloque el parametro: ?texto="})
    try {
      getfancy = fancy(text)
      var result = getfancy

console.log(result)
      res.json({ status: 200, creador: `${creador}`, resultado: `${result.font01}\n\n${result.font03}\n\n${result.font04}\n\n${result.font05}\n\n${result.font06}\n\n${result.font07}\n\n${result.font08}\n\n${result.font09}\n\n${result.font21}\n\n${result.clean}\n\n${result.circle}\n\n${result.hug}`})
    } catch (err) {
      res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
    }
  }
  )

  router.get('/tools/tinyurl', async(req, res, next) => {
    url = req.query.url
    if (!url) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloca el parametro: url"})
    // const url = 'https://www.tiktok.com/@youneszarou/video/6942436555692805381'
    turl.shorten(`${url}`)
     .then(result => {
          console.log(result)
          res.json({ status: 200, creador: `${creador}`, resultado:  `${result}`})
     })
     .catch(e => 
      console.log(e),
      res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
      )
  })

  // Social Media Api`s

  router.get('/download/tiktok-dl-nowm', async(req, res, next) => {
    url = req.query.url
    if (!url) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloca el parametro: url"})
    // const url = 'https://www.tiktok.com/@youneszarou/video/6942436555692805381'
    tiktok.tiktokdownload(`${url}`)
     .then(result => {
          console.log(result)
          res.json({ status: 200, creador: `${creador}`, resultado:  `${result.nowm}`})
     })
     .catch(e => 
      console.log(e),
      res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
      )
  })

  router.get('/download/tiktok-dl-wm', async(req, res, next) => {
    url = req.query.url
    if (!url) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloca el parametro: url"})
    // const url = 'https://www.tiktok.com/@youneszarou/video/6942436555692805381'
    tiktok.tiktokdownload(`${url}`)
     .then(result => {
          console.log(result)
          res.json({ status: 200, creador: `${creador}`, resultado:  `${result.wm}`})
     })
     .catch(e => 
      console.log(e),
      res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
      )
  })

  router.get('/download/tiktok-dl-audio', async(req, res, next) => {
    url = req.query.url
    if (!url) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloca el parametro: url"})
    // const url = 'https://www.tiktok.com/@youneszarou/video/6942436555692805381'
    tiktok.tiktokdownload(`${url}`)
     .then(result => {
          console.log(result)
          res.json({ status: 200, creador: `${creador}`, resultado:  `${result.audio}`})
     })
     .catch(e => 
      console.log(e),
      res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
      )
  })

  router.get('/socialmedia/igdownloader', async(req, res, next) => {
    url = req.query.url
    if (!url) return res.json({ status : 400, creador : `${creador}`, mensaje : "Coloca el parametro: url"})
    // const url = 'https://www.tiktok.com/@youneszarou/video/6942436555692805381'
    w5botapi.instagram(`${url}`)
     .then(data => {
          console.log(data)
          // res.json({ status: 200, creador: `${creador}`, resultado:  `${result.audio}`})
     })
     .catch(e => 
      console.log(e),
      res.send({ status: 400, response: 'Error en el servido por favor reporta a DMods!' })
      )
  })
  

  router.get('/canvas/*', async (req, res) => {
   let { url, texto } = req.query
   try {
  switch(req.path.replace(/\/canvas/, '').toLowerCase()) {
 case '/trigger':
 case '/trigger/':
  if (!url) return res.status(408).send({ status: 408, message: 'Coloque a url no parametrô'})
  res.type('gif')
  res.send(await canvacord.trigger(url))
 break
 case '/changemymind':
 case '/changemymind/':
  if (!texto) return res.status(408).send({ status: 408, message: 'coloque texto en el parametro' })
  res.type('jpg')
  res.send(await canvacord.changemymind(texto))
  break
 case '/clyde':
 case '/clyde/':
  if (!texto) return res.status(408).send({ status: 408, message: 'coloque texto en el parametro' })
  res.type('jpg')
  res.send(await canvacord.clyde(texto))
  break
 default: 
 res.status(404).json({
  status:404,
  error: 'A página que você está procurando não foi encontrada',
  endpoint: req.path
})
}
} catch (e) {
console.error(e) 
res.type('text/json')
res.status(400).send({ status: 400, menssagem: 'Erro no servidor por favor reporte para o sayo!' })
}
})
   
 router.all('/papure', async (req, res) => {
   try {
   json = JSON.parse(fs.readFileSync('lib/backgrounds.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('jpg')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send({ status: 400, response: 'Server Error!' })
   }
   })
   
router.post('/post/body', async (req, res) => {
  res.send(req.body)
})
router.all('*', async (req, res) => {
  res.status(404).json({
           status:404,
           error: 'La pagina que buscas no fue encontrada',
           endpoint: req.path
       })
})

module.exports = router
