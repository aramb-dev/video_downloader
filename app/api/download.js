import ytdl from "ytdl-core";

export default async function handler(req, res) {
  const { url, quality } = req.query;

  if (!ytdl.validateURL(url)) {
    return res.status(400).json({ error: "URL YouTube invalide" });
  }

  try {
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, {
      quality: quality || "highest",
    });

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${info.videoDetails.title}.mp4"`
    );
    res.setHeader("Content-Type", "video/mp4");

    ytdl(url, { format }).pipe(res);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors du téléchargement de la vidéo" });
  }
}
