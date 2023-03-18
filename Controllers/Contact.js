const Contact = require("../Models/Contact")

exports.addContact= async(req, res) => {
    try {
      console.log(req.user)
      const newContact = new Contact({...req.body,idPoster : req.user._id});
      await newContact.save()
      res.status(200).send({Msg : "List of Contacts",newContact})
    } catch (error) {
      res.status(500).send('Could not add commande')
    }

  }

  exports.GetMyContact = async (req, res) => {
    try {
        const contacts = await Contact.find({ idPoster: req.user._id }).populate("idPost").populate('idPoster')

        res.status(200).send({ msg: 'My contacts List : ', contacts })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get my contacts' })

    }
}

exports.GetAllContact = async (req, res) => {
    try {
        const contacts = await Contact.find().populate("idPost").populate('idPoster')

        res.status(200).send({ msg: 'My contacts List : ', contacts })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get my contacts' })

    }
}

// exports.GetOwnerContact = async (req, res) => {
//     try {
//         const contacts = await Contact.find({ idPost: req.user._id }).populate("idPost").populate('idPoster')

//         res.status(200).send({ msg: 'My contacts List : ', contacts })
//     } catch (error) {
//         res.status(500).send({ msg: 'Can not get my contacts' })

//     }
// }
exports.updateContact = async (req,res)=>{
    const {id} = req.params
    try {
        const updateContact = await Contact.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({ msg:'Contact updated'});
    } catch (error) {
        res.status(500).send({msg:'could not update'})
    }
}
exports.deleteContact = async (req, res) => {

    const { id } = req.params
    try {
        await Contact.findByIdAndDelete(id)
        res.status(200).send({ msg: 'deleted' });
    } catch (error) {
        res.status(500).send({ msg: "could not delete" })
    }
  }