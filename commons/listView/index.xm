<Alloy>
	<Window class="container">	
		<ListView id='jobResLV' top='50dp' bottom="50dp" horizontalWrap="false" width="Ti.UI.FILL">
			<ListSection id='section' />
			<Templates>
				<ItemTemplate name='usersOptionTemplate' height='157dp' width="Ti.UI.FILL">
					<View bindId="itemContainer" id="itemContainer" layout="horizontal" width="Ti.UI.FILL" horizontalWrap="FALSE">
						<View width="70dp">
								<View id="meOppVW" bindId="meOppVW" layout="vertical" width="45dp" height="Ti.UI.SIZE">
									<ImageView image='/images/icon.png' width="45dp"></ImageView>
								</View>								
						</View>
						<View id="contentLevel" layout="horizontal" height="107dp" horizontalWrap="FALSE">							
							<View width="80dp">
								<View id="but1VW" bindId="but1" layout="vertical" width="Ti.UI.SIZE" height="Ti.UI.SIZE">
									<Label>Button1</Label>
								</View>
								<View id="bdgVW1" bindId="countbdgVW1" class="badgeProps">
									<Label id="lblBdgVW1" bindId="lblCountBdgVW1" class="badgeLabelProps">2</Label>
								</View>
							</View>
							<View  width="80dp">
								<View id="localOppVW" bindId="localOppVW" layout="vertical" width="Ti.UI.SIZE" height="Ti.UI.SIZE">
									<Label>Button2</Label>
								</View>
							</View>
						</View>
					</View>
				</ItemTemplate>
			</Templates>
		</ListView> 
	</Window>
</Alloy>
