export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return;
    }
    let data = req.body;
    console.log(JSON.parse(data))
    res.status(200).json({ message: `ok` })
}