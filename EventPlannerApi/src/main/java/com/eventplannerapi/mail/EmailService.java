package com.eventplannerapi.mail;
import org.springframework.mail.SimpleMailMessage;

/**
 * Created by kubos on 8. 5. 2019.
 */

public interface EmailService {
    void sendSimpleMessage(String to, String subject, String text);
}