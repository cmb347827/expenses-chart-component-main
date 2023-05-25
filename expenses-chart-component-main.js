'use strict'; 




async function getJson() {
  const requestURL =
    "https://corsproxy.io/?https://www.jsonkeeper.com/b/6P7P";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const dataText = await response.text();

  const data = JSON.parse(dataText);
  console.log(data);
  drawBars(data);
}

const colors ={
	'White': 'hsl(0, 0%, 100%)',
	'Off black': 'hsl(0, 0%, 8%)',
	'Soft red': 'hsl(10, 79%, 65%)',
	'Lightend red':'hsl(11, 38%, 80%)',
    'Cyan': 'hsl(186, 34%, 60%)',
	'Lightend cyan':'hsl(195,100%,80%)',
};

$(window).resize(function(){
	location.reload();
});

function mouseEnter(event,data){
	const tooltip = d3.select("#tooltip");
    const bar = d3.select(this);
	
	let pos = d3.select(this).node().getBoundingClientRect();
	tooltip.style("opacity",1)
	         .text(`$${data.amount}`)
             .style('left', `${pos['x']}px`)
             .style('top', `${(window.pageYOffset  + pos['y'] - 45)}px`);
			 
	const currentBarcolor = this.getAttribute('fill');
	if(currentBarcolor === colors['Cyan']){
		this.setAttribute('fill',colors['Lightend cyan']);
	}else{
		this.setAttribute('fill',colors['Lightend red']);
	}
	
    console.log('adds',event.target,'this',this.getAttribute('fill'),'data',data); 
}
function mouseLeave(event){
	const tooltip = d3.select("#tooltip");
	tooltip.style('opacity',0);
	const currentBarcolor = this.getAttribute('fill');
	if(currentBarcolor === colors['Lightend cyan']){
		this.setAttribute('fill',colors['Cyan']);
	}else{
		this.setAttribute('fill',colors['Soft red']);
	}
}
function drawBars(data){
	let margin = {top: 40, right: 20, bottom: 40, left: 20};
    const width= 300;
	let tallerBarsNum= 40;
	const viewWidth = window.innerWidth;
	let x_scale;
	
	const height= d3.max(data, (d) => d.amount) + tallerBarsNum;
	const svgHeight = height + margin.top + margin.bottom;
	
	if(viewWidth < 1440){
	      //create the bar scale ranges , start at -25 to move the bar chart to the left(more in the middle) for mobile.
	      x_scale = d3.scaleBand().range([-25, width]).padding(0.1);
    } else {
		  //and start more to the right for desktop view.
		  x_scale = d3.scaleBand().range([25, width]).padding(0.1);
	}
    const y_scale = d3.scaleLinear().range([height , 0]);
	//set the domain of the bar scales
	x_scale.domain(data.map((d) => d.day));
    y_scale.domain([0, d3.max(data, (d) => d.amount)]);
    
	
	let svgContainer = d3.select('.d3');
	
	const tooltip= svgContainer.append('div')
                   .attr("id","tooltip")
                   .style("opacity", 0);
	let svg = svgContainer.append('svg')
	            .attr('width',width)
				.attr('height',svgHeight)
                .append("g")
	            //the group element within the svg , to group the axes and bars.Move g to a postion so it has margins top and bottom.
               .attr("transform", "translate(" + margin.bottom + "," + margin.bottom + ")");
	svg.append("g")
	      //group for the x-axis , and move it down to it's location
         .attr("transform", "translate(0," + height + ")")
		  //hide the axis lines
         .call(d3.axisBottom(x_scale)).attr('stroke-width', 0);
		 
    svg.selectAll('.bar')
	    .data(data)
		.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => x_scale(d.day))
        .attr("y", (d) => y_scale(d.amount))
        .attr("width", x_scale.bandwidth())
        .attr("height", (d) => height - (y_scale(d.amount)))
		.attr('fill',function(d){
			if(d.amount === d3.max(data, (d) => d.amount)){
				return colors['Cyan'];
		    }else {
				return colors['Soft red'];
			}
		})
		.on("mouseenter",mouseEnter)
        .on("mouseleave",mouseLeave);
	
    
  
	
	
		
	
}


$(window).on('load',function(){
	 getJson();
	 
});
