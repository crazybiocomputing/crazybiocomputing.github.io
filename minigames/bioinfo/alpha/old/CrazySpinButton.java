
import java.awt.*;
import java.awt.geom.*;
import java.awt.event.*;


public class CrazySpinButton extends CrazyWidget {

	Image normal_image;
	Image pushImage;
	String text;
	int code;
	int width, height;
	
	CrazySpinButton(int minx, int miny, int maxx, int maxy) {
		super(minx, miny, maxx, maxy);
		text = "0"; code = 48;
	}

  	void setSkin(Image image, Image pushed_image) {
		this.normal_image = image;
		this.pushImage = pushed_image;
	}

  	void setInitialDigit(int digit) {
		code = 48 + digit;
		text.replace(text.charAt(0), (char) code);
	}

  	int getDigit() {
		return (code - 48);
	}

     public void paint(Graphics g) 
     {
     	FontMetrics metrics = g.getFontMetrics();
	Rectangle2D rect = metrics.getStringBounds(text, g);
	// Hope that '0' is the largest glyph in every font
	if (code == 48) {
	    width = (int) rect.getWidth();
	    height = (int) rect.getHeight();
	}
	maxx = minx + width;
	maxy = miny + height ;
          g.setColor(Color.black);

	if (is_active) {
	    if (isUp)
		g.drawRect(minx,miny,width,6);	    
	    else
		g.fillRect(minx,miny,width,6);	    
	    g.drawString(text,minx,maxy - 8);
	    if (isUp)
		g.fillRect(minx,maxy -6,width,6);	    
	    else
		g.drawRect(minx,maxy - 6,width,6);	    
	}
	else {
		g.fillRect(minx,miny,width,6);	    
		g.drawString(text,minx,miny + height - 8);
		g.fillRect(minx,miny + height - 6,width,6);	    
	}
     }

     public void mousePressed( MouseEvent e ) { 
	if (isInsideBox(e.getX(),e.getY())) {
		is_active = true;
		if ( (float) (e.getY() - miny)/ (maxy - miny ) < 0.5 ) {
		 isUp = true; 
		 code = (code > 48 + 8) ? 48 : code + 1;
		 }
		 else {
		 isUp = false;
		 code = (code <= 48) ? 48 + 9: code - 1;
		 }
		 text = text.replace(text.charAt(0), (char) code); System.out.println(text.charAt(0) + " " + (char) code);
	}
     }		

     public void mouseReleased( MouseEvent e ) { 
	if (isInsideBox(e.getX(),e.getY())) {
		is_active = false;
	}
     }		

   boolean isUp;
}
