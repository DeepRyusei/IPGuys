<!DOCTYPE html>
<html>
<head>
<style>
    body {
			background-color: #f5f5f5;
			font-family: Arial, sans-serif;
			font-size: 16px;
			line-height: 1.5;
			padding: 20px;
		}
		h1 {
			font-size: 24px;
			font-weight: bold;
			margin-top: 0;
			margin-bottom: 20px;
			text-align: center;
		}
		form {
			background-color: #fff;
			border: 1px solid #ddd;
			border-radius: 4px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			padding: 20px;
			max-width: 600px;
			margin: 0 auto;
		}
		label {
			display: block;
			font-weight: bold;
			margin-bottom: 5px;
		}
		input[type="text"],
		textarea {
			width: 100%;
			padding: 8px;
			font-size: 16px;
			border-radius: 4px;
			border: 1px solid #ddd;
			box-sizing: border-box;
			margin-bottom: 20px;
		}
		textarea {
			height: 150px;
		}
		button[type="submit"] {
			background-color: #4CAF50;
			border: none;
			color: #fff;
			padding: 12px 24px;
			font-size: 16px;
			border-radius: 4px;
			cursor: pointer;
		}
		button[type="submit"]:hover {
			background-color: #3e8e41;
		}
		button[type="submit"]:focus {
			outline: none;
			box-shadow: 0 0 0 3px rgba(60, 170, 140, 0.5);
		}
</style>
</head>
<body>
    <h1>Edit Review</h1>
    <form id="review-form" >
        <input type="hidden" name="reviewID" value="<?php echo $reviewID; ?>">
        <label>Message:</label><br>
        <textarea name="message"><?php echo $message; ?></textarea><br>
        <button type="submit" name="update">Update</button>
    </form>
</body>
</html>