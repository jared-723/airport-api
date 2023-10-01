export const findAllPassengers = (_, res) => {
  res.json({
    message: "este endpoint devolvera todos los pasajeros",
  });
};

export const createPassenger = (req, res) => {
  const passenger = req.body;

  res.json(passenger);
};

export const findOnePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "Este endpoint obtendra un pasajero dado su id",
    id: id,
  });
};

export const updateOnePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "este endpoint actualizara el estado de un pasajero",
    id: id,
  });
};

export const deletePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "este endpoint borrara una informacion".id,
  });
};
