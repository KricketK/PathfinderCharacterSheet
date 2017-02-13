var Character = function(){
	this.name = null;
	this.race = null;
	this.class = null;
	this.strength = 11;
	this.dexterity = 10;
	this.constitution = 10;
	this.intelligence = 10;
	this.wisdom= 10;
	this.charisma= 10;
}

Character.prototype.update = function(){
	this.strengthModifier = Math.floor((this.strength-10)/2);
	this.dexterityModifier = Math.floor((this.strength-10)/2);
	this.constitutionModifier = Math.floor((this.strength-10)/2);
	this.intelligenceModifier = Math.floor((this.strength-10)/2);
	this.wisdomModifier = Math.floor((this.strength-10)/2);
	this.charismaModifier = Math.floor((this.strength-10)/2);
	this.render();
}
  
Character.prototype.render = function(){
	for(var key in this){
  	$('.'+key).text(this[key]);
	}
}
  
$(function(){
	character = new Character;
	character.update();
  
	for(var key in character){
		console.log(key+': '+character[key]);
	}
	
	$('#character-sheet-form').submit(function(e){
  	e.preventDefault();
    //$('#output').text($('#name').val());
	});
  
	$(':text').change(function(){
  		var target = '.'+this.id;
 			character[this.id] = $(this).val();
    	$(target).text($(this).val());
  	});
  
  	$('.str').change(function(){
  		'.str-modifier'
  	});
});