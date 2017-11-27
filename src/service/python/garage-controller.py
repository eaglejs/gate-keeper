# import RPi.GPIO as GPIO
import FakeRPi.GPIO as GPIO
import sys
import json

# "relay_pin": 23,
# "state_pin": 17,
# "state_pin_closed_value" : 0

class GarageController:

    def __init__(selectedGarageDoor):
        self.relay_pin = 23
        self.state_pin: 17
        self.state_pin_closed_value = 0

        GPIO.setup(self.relay_pin, GPIO.OUT)
        GPIO.setup(self.state_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)
        GPIO.output(self.relay_pin, True)

    def get_state(self):
        if GPIO.input(self.state_pin) == self.state_pin_closed_value:
            return 'closed'
        elif self.last_action == 'open':
            if time.time() - self.last_action_time >= self.time_to_open:
                return 'open'
            else:
                return 'opening'
        elif self.last_action ==  'close':
            if time.time() - self.last_action_time >= self.time_to_close:
                return 'open' # This state indicates a problem
            else:
                return 'closing'
        else:
            return 'open'

    def toggle_relay(self):
        state = self.get_state()

        GPIO.output(self.relay_pin, False)
        time.sleep(0.2)
        GPIO.output(self.relay_pin, True)

    if __name__ == '__main__':
        __init__()