const validateTittle = (req, res, next) => {
	const { body } = req;

	if (body.title == undefined) {
		return res.status(400).json({ massage: 'The field "title" is required' });
	}

	if (body.title == ''){
		return res.status(400).json({ massage: 'tittle cannot be empty' });
	}

	next();
};

const validateStatus = (req, res, next) => {
	const { body } = req;

	if (body.status == undefined) {
		return res.status(400).json({ massage: 'The field "status" is required' });
	}

	if (body.status == ''){
		return res.status(400).json({ massage: 'status cannot be empty' });
	}

	next();
};

module.exports = {
	validateTittle,
	validateStatus,
};