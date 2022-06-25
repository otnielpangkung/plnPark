const { InOut, User } = require('./models');

class Controller {
	static Register(req, res) {
		User.create({
			username: req.bpdy.username,
			role: req.bpdy.role,
			password: req.bpdy.password,
		})
			.then((data) => {
				res.status(200).json({ msg: 'Berhasil' });
			})
			.catch((err) => {
				res.status(40);
			});
	}

	static Login(req, res) {
		User.findOne({
			where: {
				username: req.body.username,
				password: req.body.password,
			},
		})
			.then((data) => {
				if (data) {
					res.status(200).json({ msg: 'Sukses Login' });
				} else {
					res.status(404).json({ msg: 'Cek kembalio Password anda' });
				}
			})
			.catch((err) => {
				res.status(404).json(err);
			});
	}

	static getAlldata(req, res) {
		console.log('tes');
		InOut.findAll({
			order: [['timeIn', 'desc']],
		})
			.then((data) => {
				console.log(data[0]);
				let dataLength = data.length;
				const startIndex = (req.query.page - 1) * req.query.limit;
				const endIndex = req.query.page * req.query.limit;
				const result = data.slice(startIndex, endIndex);
				res.status(200).json({
					data2: {
						result,
						dataLength,
					},
				});
			})
			.catch((err) => {
				res.status(401).json(err);
			});
	}
	static getStock(req, res) {
		InOut.findAll({
			where: {
				timeOut: null,
			},
		})
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(401).json(err);
			});
	}

	static inCar(req, res) {
		console.log(req.body);
		InOut.create({
			type: req.body.type,
			plat: req.body.plat,
			milik: req.body.milik,
			timeIn: new Date(),
		})
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(401).json(err);
			});
	}

	static outCar(req, res) {
		InOut.update(
			{
				timeOut: new Date(),
			},
			{
				where: {
					id: req.body.id,
				},
			}
		)
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(401).json(err);
			});
	}

	static deleteData(req, res) {
		InOut.destroy({
			where: {
				id: req.params.id,
			},
		})
			.then((data) => {
				res.status(200).json(data);
			})
			.catch((err) => {
				res.status(401).json(err);
			});
	}
}

module.exports = Controller;
