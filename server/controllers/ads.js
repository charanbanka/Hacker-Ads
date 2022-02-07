import AdDetails from '../model/ad.js'

export const getAds = async(req,res) =>{
    try {
        const ads =  await AdDetails.find()
        res.status(200).json(ads)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAd = async(req,res) =>{
    const ad = new AdDetails(req.body)
    try {
        await ad.save()
        res.status(200).json(ad)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
