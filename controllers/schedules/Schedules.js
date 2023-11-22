import Schedules from "../../models/Schedules/SchedulesModel.js";

export const getSchedules = async (req, res) => {

    try {
        const response = await Schedules.findAll();
        response.forEach((schedule) => {
            schedule.participants = JSON.parse(schedule.participants)
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
    }
}

export const getSchedule = async (req, res) => {

    const { id } = req.query;

    console.log('to aq')
    console.log('to aq')
    console.log('to aq')
    console.log('to aq')

    try {
        const response = await Schedules.findOne({
            where: {
                id: id
            }
        });



        response.dataValues.avaibleSlots = 20 - JSON.parse(response.dataValues.participants).length

        console.log(response.dataValues)

        delete response.dataValues.participants

        res.status(200).json(response);

    } catch (error) {
        console.log(error)
    }

}

export const confirmSchedule = async (req, res) => {

    const scheduleData = req.body;
    const { id } = req.query;

    try {

        const schedule = await Schedules.findOne({
            where: {
                id: id
            }
        })

        schedule.dataValues.participants = JSON.parse(schedule.dataValues.participants)

        schedule.dataValues.avaibleSlots = 20 - schedule.dataValues.participants.length

        scheduleData.newParticipants = [scheduleData.employee_name, ...scheduleData.newParticipants]

        if (schedule.dataValues.avaibleSlots < scheduleData.newParticipants.length) return res.status(400).json({msg: 'Não há vagas suficiente disponiveis, por favor considerar outro horário'})

        const newParticipantsValue = [...schedule.dataValues.participants, ...scheduleData.newParticipants]

        await Schedules.update({
            participants: JSON.stringify(newParticipantsValue)
        }, {
            where: {
                id: id
            }
        })

        res.sendStatus(200)
    } catch (error) {
        console.log(error)
    }
}