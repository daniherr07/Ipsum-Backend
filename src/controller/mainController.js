const controller = {}
const cardCollection = require('../services/connectDb')


controller.getInfo = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Access-Control-Allow-Origin': 'https://ipsum-alpha.vercel.app',
        'Cache-Control': 'no-cache',
    })

    console.log("Server Started")
    
    const pollingFetch = setInterval(async () => {
        const fetchData = await cardCollection.find()
        res.write(`data:${JSON.stringify(fetchData)}\n\n`)
    }, 1000)

    res.on('close', () => {
        console.log("Server Closed")
        clearInterval(pollingFetch)
        res.end()
    })
}

controller.saveInfo = (req, res) => {
    const {title, description, status} = req.body
    const card = new cardCollection({
        title,
        description,
        status
    })

    card.save()
        .then((resp) => res.status(201).json(resp))
        .catch((err) => res.status(503).json(err))

}



module.exports = controller