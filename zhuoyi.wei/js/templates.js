const listItemTemplate = templater(o=>`
<div >
<a class="col-xs-12 col-md-4"  href="product_item.php?id=${o.id}">
		
			<figure class="figure product display-flex flex-column">
			<div class="flex-stretch">
				<img style="width:100%;height:400px" src="img/${o.thumbnail}" alt="">
				</div>
				<figcaption class="flex-none">
				<div>&dollar;${o.price}</div>
				<div>${o.name}</div>
			
				</figcaption>
			</figure>
		</a>
	
</div>

`);