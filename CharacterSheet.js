//can you see me
var skills = {
	'acrobatics':{
  	'modifier':'dexterity'
  },
  'appraise':{
  	'modifier':'intelligence'
  },
  'bluff':{
  	'modifier':'charisma'
  },
  'climb':{
  	'modifier':'strength'
  },
  'craft':{
  	'modifier':'intelligence'
  },
  'diplomacy':{
  	'modifier':'charisma'
  },
  'disable device':{
  	'modifier':'dexterity',
    'trained':true
  },
  'disguise':{
  	'modifier':'charisma'
  },
  'escape artist':{
  	'modifier':'dexterity'
  },
  'fly':{
  	'modifier':'dexterity'
  },
  'handle animal':{
  	'modifier':'charisma',
    'trained':true
    
  },
  'heal':{
  	'modifier':'wisdom'
  },
  'intimidate':{
  	'modifier':'charisma'
  },
  'knowledge (arcana)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'knowledge (dungeoneering)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'knowledge (engineering)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'knowledge (geogrpahy)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'knowledge (history)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'knowledge (local)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'knowledge (nature)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'knowledge (nobility)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'knowledge (planes)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'knowledge (religion)':{
  	'modifier':'intelligence',
    'trained':true
  },
  'linguistics':{
  	'modifier':'knowledge',
    'trained':true
  },
  'perception':{
  	'modifier':'wisdom'
  },
  'perform':{
  	'modifier':'charisma'
  },
  'profession':{
  	'modifier':'wisdom',
    'trained':true
  },
  'ride':{
  	'modifier':'dexterity'
  },
  'sense motive':{
  	'modifier':'wisdom'
  },
  'sleight of hand':{
  	'modifier':'dexterity'
  },
  'spellcraft':{
  	'modifier':'intelligence',
    'trained':true
  },
  'stealth':{
  	'modifier':'dexterity'
  },
  'survival':{
  	'modifier':'wisdom'
  },
  'swim':{
  	'modifier':'strength'
  },
  'use magical device':{
  	'modifier':'charisma'
  }
}

var classes = {
	'barbarian':{
  	'skills':[
    	'acrobatics',
      'climb',
      'craft',
      'handle animal',
      'intimidate',
      'knowledge (nature)',
      'perception',
      'ride',
      'survival',
      'swim'
    ]
  },
  'occultist':{
  	'skills':[
    	
    ]
  }
}

var Character = function(){
	this.name = 'Bubba B';
  this.race = 'Elf';
  this.class = 'Bard';
  this.strength = 15;
  this.dexterity = 13;
  this.constitution = 15;
  this.intelligence = 11;
  this.wisdom= 7;
  this.charisma= 13;
}

Character.prototype.update = function(){
	this.strengthModifier = Math.floor((this.strength-10)/2);
	this.dexterityModifier = Math.floor((this.dexterity-10)/2);
	this.constitutionModifier = Math.floor((this.constitution-10)/2);
	this.intelligenceModifier = Math.floor((this.intelligence-10)/2);
	this.wisdomModifier = Math.floor((this.wisdom-10)/2);
	this.charismaModifier = Math.floor((this.charisma-10)/2);
	for(var key in this){
  	console.log(key+': '+this[key]);
  }
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
  
  
	$('#character-sheet-form').submit(function(e){
  	e.preventDefault();
    //$('#output').text($('#name').val());
  });
  
  $(':text').change(function(){
  	var target = '.'+this.id;
    character[this.id] = $(this).val();
    character.update();
    $(target).text($(this).val());
  });
  
});