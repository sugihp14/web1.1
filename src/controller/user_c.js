import userMod from "../model/user_m.js";

const Register = async (req, res) => {
  const nama = req.body.nama;
  const alamat = req.body.alamat;
  const nomor_telepon = req.body.nomor_telepon;
  const jenis_kelamin = req.body.jenis_kelamin;
  try {
    const hasil = await userMod.Users.count({
      where: {
        nama: nama,
      },
    });
    if (hasil > 0) {
      res.json({ msg: "Your Name is Already Use" });
    } else {
      await userMod.Users.create({
        nama: nama,
        alamat: alamat,
        nomor_telepon: nomor_telepon,
        jenis_kelamin: jenis_kelamin,
      });
      res.json({ msg: "Register Berhasil" });
    }
  } catch (error) {
    return res.status(404).json({ msg: "Gagal Register" });
  }
};

const getAll = async (req, res) => {
  try {
    const data = await userMod.Users.findAll();
    return res.status(200).json({ msg: "Get All", data: data });
  } catch (error) {
    return res.status(404).json({ msg: "gagal" });
  }
};

const updateUser = async (req, res) => {
  const id = req.body.id;
  const nama = req.body.nama;
  const alamat = req.body.alamat;
  const nomor_telepon = req.body.nomor_telepon;
  const jenis_kelamin = req.body.jenis_kelamin;

  const user = await userMod.Users.findByPk(id);

  const hasil = await userMod.Users.count({
    where: {
      nama: nama,
    },
  });
  if (hasil < 0) {
    res.json({ msg: "data tidak ada" });
  } else {
    await user.update({
      nama,
      alamat,
      nomor_telepon,
      jenis_kelamin,
    });
    return res.json({ msg: "Berhasil Ubah" });
  }
};
const deleteUser = async (req, res) => {
  const ids = req.params.id || req.query.id || req.body.id;

  try {
    const user = await userMod.Users.findByPk(ids);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Your logic to delete the user using the user instance
    await user.destroy();

    res.json({ msg: "Delete Berhasil" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const checkUser = async (req, res) => {
  const id = req.body.id;

  const hasil = await userMod.Users.findByPk(id);

  res.json({ hasil });
};

export { Register, updateUser, deleteUser, checkUser, getAll };
