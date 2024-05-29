<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customisable Prompt</title>
</head>
<body>
      <h1>Hello world</h1>
      <button onclick="managePromptModal('This is my prompt !', 'Lorem ipsum dolor sit amet', 'Yes' ,'No', true)">Show the prompt</button>
      <?php require_once("template_prompt.php"); ?>
      <script src="script_manage_prompt.js"></script>
</body>
</html>
