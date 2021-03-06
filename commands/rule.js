module.exports = {
  name: 'rule',
  aliases: ['sendrule'],
  description: 'Sends a rule.',
  usage: '<rule number>',
  cooldown: 0,
  disable:false,
	execute(message, args) {
    const Discord = require('discord.js');
    const client = new Discord.Client();
	const fs = require('fs');
	const { prefix, token } = require('../config.json');
	const argarray = message.content.slice(prefix.length).trim().split(/ +/g);
	const rulenumber = argarray[1]
	//loading rules, thanks to 🍗 for helping me add the below part
	var entry = rulenumber; // This is the argument of the command ".load 1"
	var dict = require("../rules.json"); // The JSON data to load from
	var result = dict['Rule'+argarray[1]]; // The thing that was loaded
	if(`${result}` == 'undefined'){message.channel.send('Please make sure you entered a valid rule number.');return;}
		try {
		const RuleEmbed = new Discord.MessageEmbed()
		.setTitle('About Rule '+argarray[1])
		.setDescription(`${result}`)
		.setTimestamp()
		message.channel.send(RuleEmbed);
		return;
	}catch(error) {
			// Your code broke (Leave untouched in most cases)
			console.error('an error has occured', error);
		  }


		  
  }}