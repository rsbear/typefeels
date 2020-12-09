import fs from "fs";

export function post(req, res) {
  res.setHeader("Content-Type", "application/json");

  const { alias, title, date, hero, content, user } = req.body;

  const body = `---\ntitle: ${title}\nalias: ${alias}\ndate: ${date}\nhero: ${hero}\nuser: ${user}\n---\n${content}`;

  fs.writeFile(`markdowns/${alias}.md`, body, function (err) {
    if (err) {
      res.end(JSON.stringify({ failed: true }));
    }
    console.log("file creation successful");
    res.end(JSON.stringify({ success: true }));
  });
  res.end(JSON.stringify({ success: true }));
}
