var Character = function(){
	this.name = 'Bubba B';
	this.race = 'Elf';
	this.class = 'barbarian';
	this.strength = 15;
	this.dexterity = 13;
	this.constitution = 15;
	this.intelligence = 11;
	this.wisdom= 7;
	this.charisma= 13;
	this.skills = {
		craft:1
	};
}

Character.prototype.update = function(){
	this.strengthModifier = Math.floor((this.strength-10)/2);
	this.dexterityModifier = Math.floor((this.dexterity-10)/2);
	this.constitutionModifier = Math.floor((this.constitution-10)/2);
	this.intelligenceModifier = Math.floor((this.intelligence-10)/2);
	this.wisdomModifier = Math.floor((this.wisdom-10)/2);
	this.charismaModifier = Math.floor((this.charisma-10)/2);

	for(var key in this){

	}
	this.render();
}
  
Character.prototype.render = function(){
	for(var key in this){
		if($('.'+key).length){
			$('.'+key).text(this[key])
		};
	}
}


  
$(function(){
	character = new Character;
	character.update();
	
	var tempText = '<h2>Skills</h2><table><tr><td>Skill</td><td>Total</td><td>Ranks</td><td>Bonus</td><td>Modifier</td><td>Misc</td></tr>';

	for(var skill in skills){
		var tMod = skills[skill].modifier;
		var cMod = character[tMod+'Modifier'];
		var tRanks = (character.skills[skill] ? character.skills[skill] : 0);
		var tTotal = cMod + tRanks;
		var tText = '<tr><td>'+skill.replace(/\b\w/g, function(l){ return l.toUpperCase() })+'</td><td>'+tTotal+' </td><td>'+ tRanks +' </td><td></td><td> '+ cMod +'</td><td></td></tr>';		

		tempText += tText;
	}
	tempText += '</table>';
	$('.skills-section').append(tempText);

}); 