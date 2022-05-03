#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h> 
#include <ESP8266HTTPClient.h>
#define RED D1
#define YELLOW D2
#define GREEN D5

const char* host = "bacs-495-s-22-server-3kr92.ondigitalocean.app";
const char* fingerprint = "5a78e7c7e7d6f5e387a1ba91ae2f45e63a8e725f";


void setup()
{
  Serial.begin(115200);
  Serial.println();

  WiFi.begin("Landing", "smoothlanding");

  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());

  pinMode(RED, OUTPUT);
  pinMode(YELLOW, OUTPUT);
  pinMode(GREEN, OUTPUT);
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) { 
    WiFiClientSecure client;
    Serial.print("connecting to ");
    Serial.println(host);
    client.setFingerprint(fingerprint);
    if (!client.connect(host, 443)) {
      Serial.println("connection failed");
      return;
    }else{
      Serial.println("Connected!");
      client.print(String("GET ") + "/lights" + " HTTP/1.1\r\n" +
                     "Host: " + host + "\r\n" +               
                     "Connection: close\r\n\r\n");
      
      Serial.println("request sent");
                        
      while (client.connected()) {
        String line = client.readStringUntil('\n');
        if (line == "\r") {
          Serial.println("headers received");
          break;
        }
      }
      Serial.println("==========");
      String line;
      while(client.available()){        
        line = client.readStringUntil('\n');  
        if(line.startsWith("RED")){
          turn_off();
          turn_on(RED);                        
        }else if(line.startsWith("GREEN")){
          turn_off();
          turn_on(GREEN); 
        }else if(line.startsWith("YELLOW")){
          turn_off();
          turn_on(YELLOW); 
        }
        Serial.println(line); 
      }
      Serial.println("closing connection");
        
      delay(2000);  
    }
    
  }else{
    Serial.println("Not connected");
  }
 
  
}

void turn_on(int pin){
  digitalWrite(pin, HIGH);
}

void turn_off(){
    digitalWrite(RED, LOW);
    digitalWrite(GREEN, LOW);
    digitalWrite(YELLOW, LOW);
}
