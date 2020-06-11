package com.carla.cost.utils;

import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class ShortDateDeserializer extends JsonDeserializer<Timestamp> {

	@Override
	public Timestamp deserialize(com.fasterxml.jackson.core.JsonParser parser, DeserializationContext ctxt)
			throws IOException, JsonProcessingException {
		try {
            String rawDate = parser.getText();
            System.out.println("RawDate: " + rawDate);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss"); // new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
            return new Timestamp(sdf.parse(rawDate).getTime());
        } catch (Exception e) {
            throw new IOException("Failed to parse date: "+parser.getText());
        }
	}
}
